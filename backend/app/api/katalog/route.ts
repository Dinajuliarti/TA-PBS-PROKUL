import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { name, description, price, imageUrl } = body;

    if (!name || !price) {
      return NextResponse.json(
        { message: "Name and price are required." },
        { status: 400 }
      );
    }

    const newItem = await db.katalog.create({
      data: {
        name,
        description,
        price,
        imageUrl,
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
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create item" + error },
      { status: 500 }
    );
  }
};

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
