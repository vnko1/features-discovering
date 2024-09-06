"use client";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export function useEditSearchParams(
  name: string,
  value: string | string[],
  href?: string,
  separator = ","
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return () => {
    const formattedValue = Array.isArray(value)
      ? value.join(separator)
      : value;

    const config = href
      ? {
          [name]: formattedValue.trim(),
        }
      : searchParams;

    const params = new URLSearchParams(config);

    if (href) return router.push(href + "?" + params.toString());

    name
      ? params.set(name, formattedValue.trim())
      : params.delete(name);
    router.replace(pathname + "?" + params.toString());
  };
}
