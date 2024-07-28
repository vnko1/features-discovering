import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:1337/api/todos?populate=*");

  return NextResponse.json({ data: await res.json() });
}
