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
    // Roti Manis
    {
      name: "Roti Sari Roti Tawar",
      description: "Roti tawar lembut dengan kandungan serat tinggi",
      price: 25000,
      imageUrl: "/1.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Croissant Almond",
      description: "Croissant renyah dengan topping almond slice",
      price: 18000,
      imageUrl: "/2.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Donat Coklat",
      description: "Donat empuk dengan topping coklat dan meses warna-warni",
      price: 8000,
      imageUrl: "/3.png",
      kategori: "roti-manis",
      status: "Terlaris",
    },
    {
      name: "Bagel Blueberry",
      description: "Bagel lembut dengan isian selai blueberry asli",
      price: 15000,
      imageUrl: "/4.png",
      kategori: "roti-manis",
      status: "New",
    },
    {
      name: "Roti Coklat Almond",
      description: "Roti manis dengan isian coklat dan topping almond",
      price: 17000,
      imageUrl: "/5.png",
      kategori: "roti-manis",
      status: "Terlaris",
    },

    // Roti Isi
    {
      name: "Roti Coklat Keju",
      description: "Roti isi coklat dan keju dengan taburan meses",
      price: 12000,
      imageUrl: "/6.png",
      kategori: "roti-isi",
      status: "Terlaris",
    },
    {
      name: "Roti Ayam Pedas",
      description: "Roti isi ayam pedas gurih dengan bumbu khas",
      price: 15000,
      imageUrl: "/7.png",
      kategori: "roti-isi",
      status: "New",
    },
    {
      name: "Roti Sosis Mayo",
      description: "Roti isi sosis dengan saus mayo dan keju",
      price: 17000,
      imageUrl: "/8.png",
      kategori: "roti-isi",
      status: "New",
    },
    {
      name: "Roti Tuna Spesial",
      description: "Roti isi tuna dengan saus spesial dan sayuran segar",
      price: 20000,
      imageUrl: "/9.png",
      kategori: "roti-isi",
      status: "Terlaris",
    },
    {
      name: "Roti Telur Mayo",
      description: "Roti isi telur dan mayonaise creamy",
      price: 16000,
      imageUrl: "/10.png",
      kategori: "roti-isi",
      status: "New",
    },

    // Roti Kering
    {
      name: "Roti Kering Coklat",
      description: "Roti kering rasa coklat yang renyah dan manis",
      price: 10000,
      imageUrl: "/11.png",
      kategori: "roti-kering",
      status: "New",
    },
    {
      name: "Kastengel",
      description: "Kue kering dengan rasa keju gurih dan renyah",
      price: 35000,
      imageUrl: "/12.png",
      kategori: "roti-kering",
      status: "Terlaris",
    },
    {
      name: "Putri Salju",
      description: "Kue kering lembut dengan taburan gula halus",
      price: 30000,
      imageUrl: "/13.png",
      kategori: "roti-kering",
      status: "New",
    },
    {
      name: "Roti Kering Pandan",
      description: "Roti kering rasa pandan harum dan gurih",
      price: 15000,
      imageUrl: "/14.png",
      kategori: "roti-kering",
      status: "New",
    },
    {
      name: "Roti Kering Vanila",
      description: "Roti kering rasa vanila yang renyah",
      price: 15000,
      imageUrl: "/15.png",
      kategori: "roti-kering",
      status: "New",
    },

    // Roti Lainnya
    {
      name: "Roti Pisang Coklat",
      description: "Roti isi pisang dan coklat dengan topping wijen",
      price: 14000,
      imageUrl: "/16.png",
      kategori: "roti-lainnya",
      status: "New",
    },
    {
      name: "Roti Pizza Mini",
      description: "Roti pizza dengan topping sosis, keju, dan saus tomat",
      price: 16000,
      imageUrl: "/17.png",
      kategori: "roti-lainnya",
      status: "Terlaris",
    },
    {
      name: "Roti Tawar Gandum",
      description: "Roti tawar dengan bahan gandum utuh yang sehat",
      price: 20000,
      imageUrl: "/18.png",
      kategori: "roti-lainnya",
      status: "New",
    },
    {
      name: "Roti Lapis Strawberry",
      description: "Roti lapis dengan isian selai strawberry segar",
      price: 15000,
      imageUrl: "/19.png",
      kategori: "roti-lainnya",
      status: "New",
    },
    {
      name: "Roti Kentang Isi Ayam",
      description: "Roti kentang empuk dengan isian ayam cincang",
      price: 18000,
      imageUrl: "/20.png",
      kategori: "roti-lainnya",
      status: "Terlaris",
    },
  ];

  await Promise.all(breads.map((bread) => db.katalog.create({ data: bread })));
}
