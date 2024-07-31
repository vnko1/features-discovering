// import { redirect } from "next/navigation";
import crypto from "crypto";

const merchantSecretKey = "flk3409refn54t54t*FNJRET";

export const createSignature = async (dataString: string) => {
  const hmac = crypto.createHmac("md5", merchantSecretKey);
  hmac.update(dataString, "utf8");
  return hmac.digest("hex");
};

export const pay = async (formData: FormData) => {
  "use server";

  const res = await fetch("https://secure.wayforpay.com/pay", {
    method: "POST",
    body: formData,
    headers: {
      "Accept-Charset": "utf-8",
    },
  });
  if (!res.ok) console.log("🚀 ~ pay ~ res:", res);

  console.log(res);
  // redirect(res.url);
};
