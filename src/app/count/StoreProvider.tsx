"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, incrementByAmount } from "@/lib/redux";

export default function StoreProvider({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: number;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(incrementByAmount(initialValue));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
