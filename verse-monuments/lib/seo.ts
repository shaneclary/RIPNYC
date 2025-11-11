import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

/**
 * Generate metadata for pages
 */
export function generateSEO({
  title = "VERSE — RIP NYC Monuments",
  description = "Quiet acknowledgments of what ended—and what remains. Limited apparel pieces as monuments.",
  image = "/og-image.png",
  url = "",
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
