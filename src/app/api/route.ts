import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:1337/api/todos?populate=*");

  return NextResponse.json({ data: await res.json() });
}

export async function POST(req: NextRequest) {
  const data = await req.formData();

  await fetch("https://secure.wayforpay.com/pay", {
    method: "POST",
    body: data,
  });
  return NextResponse.json({ data: "OK" });
}
