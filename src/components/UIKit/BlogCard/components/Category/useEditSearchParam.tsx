"use client";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export function useEditSearchParam(
  name: string,
  value: string,
  href?: string
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  return () => {
    const config = href
      ? {
          [name]: value,
        }
      : searchParams;
    const params = new URLSearchParams(config);

    if (href) return router.push(href + "?" + params.toString());
    name ? params.set(name, value.trim()) : params.delete(name);
    router.replace(pathname + "?" + params.toString());
  };
}
