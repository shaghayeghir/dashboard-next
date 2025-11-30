import type { Metadata } from "next";

export function postDetailsMetadata(id: string): Metadata {
  return {
    title: `پست شماره ${id}`,
    description: `جزئیات مربوط به پست با ID ${id}`,
    openGraph: {
      title: `پست ${id}`,
      description: `صفحه نمایش پست شماره ${id}`,
      type: "article",
    },
  };
}
