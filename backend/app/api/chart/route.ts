import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validasi sederhana
    if (!id) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Parameter 'id' tidak ditemukan di query string.",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const viewChart = await db.user.findUnique({
      where: { id },
      select: {
        chart: true, // atau `charts` jika relasi kamu pakai `charts`
      },
    });

    if (!viewChart) {
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
