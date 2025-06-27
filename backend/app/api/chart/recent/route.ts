import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { formatRupiah } from "@/lib/format";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "4");
    const offset = (page - 1) * limit;

    // Validasi parameter
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Parameter 'page' dan 'limit' harus angka positif",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const recentCharts = await prisma.chart.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        katalog: true,
        user: true,
      },
    });

    const orders = recentCharts.map((chart) => ({
      id: chart.id,
      customer: chart.user.name || chart.user.email.split("@")[0],
      date: chart.createdAt.toISOString(),
      amount: chart.katalog.price * chart.quantity,
      amountFormatted: formatRupiah(chart.katalog.price * chart.quantity), // Format Rupiah
      productName: chart.katalog.name,
    }));

    const total = await prisma.chart.count();
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data pesanan terbaru berhasil diambil",
          status: 200,
        },
        data_view: {
          orders,
          total,
          currentPage: page,
          totalPages,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching recent orders:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Terjadi kesalahan saat mengambil data pesanan",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
}
