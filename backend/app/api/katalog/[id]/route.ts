import { db } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const formData = await request.formData();

    // Ekstrak data dari form
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const file = formData.get("image") as File | null;
    const kategori = formData.get("kategori") as string | null;
    const status = formData.get("status") as string | null;

    const id = params.id;

    // Validasi data wajib
    if (!name || !price) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Nama dan harga wajib diisi",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    // Cek produk yang akan diupdate
    const existingProduct = await db.katalog.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Produk tidak ditemukan",
            status: 404,
          },
        },
        { status: 404 }
      );
    }

    let imageUrl = existingProduct.imageUrl;

    // Jika ada file baru diupload
    if (file && file.size > 0) {
      // Validasi ukuran file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          {
            metadata: {
              error: 1,
              message: "Ukuran gambar terlalu besar (maksimal 5MB)",
              status: 400,
            },
          },
          { status: 400 }
        );
      }

      // Validasi tipe file
      const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedMimeTypes.includes(file.type)) {
        return NextResponse.json(
          {
            metadata: {
              error: 1,
              message: "Format gambar tidak didukung (hanya JPEG, PNG, WebP)",
              status: 400,
            },
          },
          { status: 400 }
        );
      }

      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = file.name.split(".").pop();
      const fileName = `${name.replace(
        /\s+/g,
        "-"
      )}-${timestamp}.${fileExtension}`;

      // Upload gambar ke Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("katalog-images")
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
      }

      // Dapatkan URL publik
      const { data: publicUrlData } = supabase.storage
        .from("katalog-images")
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    // Update data di database
    const updatedProduct = await db.katalog.update({
      where: { id },
      data: {
        name,
        description: description || "",
        price: parseFloat(price),
        imageUrl,
        kategori: kategori || existingProduct.kategori || "roti-manis",
        status: status || existingProduct.status || "New",
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Produk berhasil diperbarui",
          status: 200,
        },
        data_view: updatedProduct,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: error.message || "Gagal memperbarui produk",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

// GET dan DELETE tetap sama

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const id = params.id;
    const findItems = await db.katalog.findUnique({
      where: {
        id,
      },
    });

    const deleteUser = await db.katalog.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: `Data dengan nama ${findItems?.name} Berhasil dihapus`,
          status: 200,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {}
};
