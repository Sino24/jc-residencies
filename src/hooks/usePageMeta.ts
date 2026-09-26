import { useEffect } from "react";
import { property } from "@/data/property";

/** Sets the document title and meta description for the current page. */
export function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${property.name}` : property.seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description ?? property.seo.description);
  }, [title, description]);
}
