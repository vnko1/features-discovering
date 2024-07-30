import crypto from "crypto";

const merchantSecretKey = "flk3409refn54t54t*FNJRET";

export const createSignature = async (dataString: string) => {
  const hmac = crypto.createHmac("md5", merchantSecretKey);
  hmac.update(dataString, "utf8");
  return hmac.digest("hex");
};
