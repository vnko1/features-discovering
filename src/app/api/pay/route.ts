import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log("🚀 ~ POST PAY ~ data:", data);

  redirect("/pay");
}
