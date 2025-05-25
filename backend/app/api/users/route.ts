import { metadata } from "@/app/layout";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        username: true,
        chart: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const { username } = await req.json();

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
