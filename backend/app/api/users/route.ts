import { metadata } from "@/app/layout";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        username: true,
        chart: true,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Berhasil mengambil data user",
          status: 200,
        },
        data_view: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: "Gagal mengambil data user",
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { username } = await req.json();

    if (!username) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Field username wajib diisi",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const createUser = await db.user.create({
      data: {
        username,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "User berhasil dibuat",
          status: 201,
        },
        data_view: createUser,
      },
      {
        status: 201,
      }
    );
  } catch (error: unknown) {}
};
