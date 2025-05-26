import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET - Hitung total harga chart berdasarkan user ID
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Parameter 'id' tidak ditemukan atau tidak valid.",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const items = await db.chart.findMany({
      where: { userId: id },
      include: {
        katalog: true,
      },
    });

    const totalHarga = items.reduce((total, item) => {
      const harga = item.katalog?.price ?? 0;
      return total + item.quantity * harga;
    }, 0);

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Berhasil menghitung total harga chart",
          status: 200,
        },
        view_data: {
          items,
          totalHarga,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `Terjadi kesalahan server: ${error}`,
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

// POST - Tambah item chart baru
export const POST = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);

    const katalogId = searchParams.get("katalogId");
    const quantity = searchParams.get("quantity");
    const userId = searchParams.get("id");

    if (!katalogId || !userId || !quantity) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Field 'katalogId', 'quantity', dan 'id' wajib diisi.",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const parsedQty = parseInt(quantity);
    if (isNaN(parsedQty) || parsedQty <= 0) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "'quantity' harus berupa angka lebih dari 0.",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const created = await db.chart.create({
      data: {
        katalogId,
        userId,
        quantity: parsedQty,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Item berhasil ditambahkan ke chart.",
          status: 201,
        },
        view_data: created,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `Gagal menambahkan item: ${error}`,
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};


      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "User tidak ditemukan.",
            status: 404,
          },
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Chart user berhasil diambil.",
          status: 200,
        },
        data_view: viewChart,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `Terjadi kesalahan server: ${error}`,
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};
