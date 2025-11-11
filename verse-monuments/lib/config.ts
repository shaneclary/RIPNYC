export const CONFIG = {
  BUY_MODE: process.env.NEXT_PUBLIC_BUY_MODE || "links", // 'links' | 'shopify'
  SHOPIFY: {
    DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || "",
    BUY_BUTTON_ID: process.env.NEXT_PUBLIC_SHOPIFY_BUY_BUTTON_ID || ""
  },
  ANALYTICS_SCRIPT: process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT || "",
};

export const SITE = {
  name: "Verse-Monuments",
  tagline: "Living in the Monument",
  description: "Quiet acknowledgments of what ended—and what remains.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://verse-monuments.vercel.app",
};
