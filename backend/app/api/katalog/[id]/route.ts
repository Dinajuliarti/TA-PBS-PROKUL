import { metadata } from "@/app/layout";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  try {
    const body = await request.json();
    const { name, description, price, imageUrl } = body;
    const id = params.id;
    const updateUser = await db.katalog.update({
      where: {
        id: id,
      },
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
          message: "Data berhasil diperbaharui",
          status: 200,
        },
        data_view: updateUser,
      },
      {
        status: 200,
      }
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
      {
        status: 500,
      }
    );
  }
};

export const GET = async (
  request: NextRequest,
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
    const getItemById = await db.katalog.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      {
        metadata: {
          error: 0,
          message: "Data dengan ID berhasil diambil",
          status: 200,
        },
        data_view: getItemById,
      },
      {
        status: 200,
      }
    );
  } catch (err: unknown) {}
};

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
