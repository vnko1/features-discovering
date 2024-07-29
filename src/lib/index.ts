import crypto from "crypto";

const merchantSecretKey = "flk3409refn54t54t*FNJRET";

export const createSignature = async (dataString: string) => {
  const hmac = crypto.createHmac("md5", merchantSecretKey);
  hmac.update(dataString, "utf8");
  return hmac.digest("hex");
};

export async function pay(formData: FormData) {
  const res = await fetch("https://secure.wayforpay.com/pay", {
    method: "POST",
    body: formData,
  });

  console.log("🚀 ~ pay ~ data:", res);
}
