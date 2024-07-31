import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const declineMessage = data.get("reason");
  if (declineMessage) redirect(`/declined?reason=${declineMessage}`);

  redirect("/accepted");
}
