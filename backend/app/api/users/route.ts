import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async () => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        chart: true,
        createdAt: true,
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
    const { email, password, name } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Field email dan password wajib diisi",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    // Cek apakah email sudah digunakan
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Email sudah terdaftar",
            status: 409,
          },
        },
        { status: 409 }
      );
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "User berhasil dibuat",
          status: 201,
        },
        data_view: {
          id: createUser.id,
          email: createUser.email,
          name: createUser.name,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `${error}`,
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          metadata: {
            error: 1,
            message: "Missing required field: id",
            status: 400,
          },
        },
        { status: 400 }
      );
    }

    const deletedUser = await db.user.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "User berhasil dihapus",
          status: 200,
        },
        data_view: {
          id: deletedUser.id,
          email: deletedUser.email,
          name: deletedUser.name,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `${error}`,
          status: 500,
        },
      },
      { status: 500 }
    );
  }
};
