import React, { FC } from "react";

import { createSignature } from "@/lib";
import { PayFormProps } from "./PayForm.type";

const merchantAccount = "test_merch_n1";
const merchantDomainName = "www.market.ua";

const PayForm: FC<PayFormProps> = async ({
  orderReference,
  orderDate,
  amount,
  currency,
  productName,
  productPrice,
  productCount,
  ...restFields
}) => {
  const mainFields = {
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
  };

  const signArr = Object.values({
    ...mainFields,
    productName,
    productCount,
    productPrice,
  }).flatMap((el) => el);

  const signature = await createSignature(signArr.join(";"));

  return (
    <form
      method="post"
      action="https://secure.wayforpay.com/pay"
      acceptCharset="utf-8"
    >
      <input name="merchantAccount" defaultValue={merchantAccount} hidden />
      <input
        name="merchantDomainName"
        defaultValue={merchantDomainName}
        hidden
      />
      {Object.entries(mainFields).map(([key, value], index) => (
        <input key={index} name={key} defaultValue={value} hidden />
      ))}
      {productName.map((product, index) => (
        <input key={index} name="productName[]" defaultValue={product} hidden />
      ))}
      {productPrice.map((product, index) => (
        <input
          key={index}
          name="productPrice[]"
          defaultValue={product}
          hidden
        />
      ))}
      {productCount.map((product, index) => (
        <input
          key={index}
          name="productCount[]"
          defaultValue={product}
          hidden
        />
      ))}
      {Object.entries(restFields).map(([key, value], index) => (
        <input key={index} name={key} defaultValue={value} hidden />
      ))}
      <input name="merchantSignature" defaultValue={signature} hidden />
      <button type="submit">Оплатить</button>
    </form>
  );
};

export default PayForm;
