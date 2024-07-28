import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("🚀 ~ GET ~ req:", req);
  return NextResponse.json({ data: "text" });
}
