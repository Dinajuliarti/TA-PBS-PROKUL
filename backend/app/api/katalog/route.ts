import { metadata } from "@/app/layout";
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
    const katalog = await db.katalog.findMany();
    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Semua katalog berhasil diambil",
          status: 200,
        },
        data_view: katalog,
      },
      {
        status: 200,
      }
    );
  } catch (err: unknown) {
    console.log(err);
    return NextResponse.json(
      {
        metadata: {
          error: 1,
          message: `${err}`,
          status: 500,
        },
      },
      {
        status: 500,
      }
    );
  }
};
