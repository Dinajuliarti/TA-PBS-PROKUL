import { db } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// Helper untuk validasi
const validateProductData = (body: any) => {
  const { name, price } = body;
  const errors = [];

  if (!name) errors.push("Nama produk wajib diisi");
  if (!price) errors.push("Harga produk wajib diisi");
  if (isNaN(Number(price))) errors.push("Harga harus berupa angka");

  return errors;
};

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();

    // Ekstrak data dari form
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;
    const file = formData.get("image") as File | null;

    // Validasi data wajib
    const validationErrors = validateProductData({ name, price });
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: validationErrors.join(", "),
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    // Validasi file gambar
    if (!file) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Gambar produk wajib diunggah",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

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

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const fileName = `${name.replace(
      /\s+/g,
      "-"
    )}-${timestamp}.${fileExtension}`;

    // Upload gambar ke Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("katalog-images")
      .upload(fileName, file);

    if (uploadError) {
      throw new Error(`Gagal mengunggah gambar: ${uploadError.message}`);
    }

    // Dapatkan URL publik
    const { data: publicUrlData } = supabase.storage
      .from("katalog-images")
      .getPublicUrl(fileName);

    // Simpan ke database
    const newItem = await db.katalog.create({
      data: {
        name,
        description: description || "",
        price: parseFloat(price),
        imageUrl: publicUrlData.publicUrl,
        kategori: (formData.get("kategori") as string) || "roti-manis",
        status: (formData.get("status") as string) || "New",
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Item berhasil ditambahkan",
          status: 201,
        },
        data_view: newItem,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: error.message || "Gagal menambahkan item",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

// GET endpoint tetap sama seperti sebelumnya

export const GET = async () => {
  try {
    // Cek apakah katalog kosong
    const count = await db.katalog.count();

    // Jika tidak ada data, generate data roti
    if (count === 0) {
      await seedBreadData();
    }

    const katalog = await db.katalog.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        imageUrl: true,
        status: true,
        kategori: true, // Pastikan ini termasuk
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Semua katalog berhasil diambil",
          status: 200,
        },
        data_view: katalog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching katalog:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Gagal mengambil data katalog",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

// Fungsi untuk generate data roti otomatis
async function seedBreadData() {
  const breads = [
    {
      name: "Roti Sari Roti Tawar",
      description: "Roti tawar lembut dengan kandungan serat tinggi",
      price: 25000,
      imageUrl: "/placeholder.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Roti Coklat Keju",
      description: "Roti isi coklat dan keju dengan taburan meses",
      price: 12000,
      imageUrl: "/placeholder.png",
      kategori: "roti-isi",
      status: "Terlaris",
    },
    {
      name: "Croissant Almond",
      description: "Croissant renyah dengan topping almond slice",
      price: 18000,
      imageUrl: "/placeholder.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Donat Coklat",
      description: "Donat empuk dengan topping coklat dan meses warna-warni",
      price: 8000,
      imageUrl: "/placeholder.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Bagel Blueberry",
      description: "Bagel lembut dengan isian selai blueberry asli",
      price: 15000,
      imageUrl: "/placeholder.png",
      kategori: "roti-manis",
      status: "New",
    },
  ];

  await Promise.all(breads.map((bread) => db.katalog.create({ data: bread })));
}
