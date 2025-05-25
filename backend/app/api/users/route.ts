import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await db.user.findMany({
            select: {
                id: true,
                username: true,
                chart: true
            },
        });

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}


