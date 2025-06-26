import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ "API PERMATA ROTI": "v1.0.0", status: "OK" });
}
