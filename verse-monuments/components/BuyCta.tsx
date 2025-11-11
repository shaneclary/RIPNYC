"use client";

import { CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

interface BuyCtaProps {
  href?: string;
  productId?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  addToCart?: boolean;
  monument?: {
    id: string;
    title: string;
    image: string;
    slug: string;
  };
}

export default function BuyCta({
  href = "#",
  productId,
  className,
  children = "Own the timestamp",
  variant = "primary",
  addToCart = false,
  monument
}: BuyCtaProps) {
  const { addItem } = useCart();

  const handleClick = (e: React.MouseEvent) => {
    if (addToCart && monument) {
      e.preventDefault();
      addItem({
        id: monument.id,
        title: monument.title,
        image: monument.image,
        slug: monument.slug,
      });
      return;
    }

    if (CONFIG.BUY_MODE === "shopify" && productId) {
      e.preventDefault();
      // Shopify Buy Button integration would go here
      console.log("Shopify product:", productId);
      // For now, fall back to href
      if (href && href !== "#") {
        window.open(href, "_blank");
      }
    }
  };

  const baseClassName = cn(
    "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    "active:scale-[0.98]",
    variant === "primary" && [
      "bg-white text-ink shadow-sm",
      "hover:bg-ash hover:text-white hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
    ],
    variant === "secondary" && [
      "border border-hairline text-white",
      "hover:border-white hover:bg-white/5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
    ],
    className
  );

  if (addToCart) {
    return (
      <button
        onClick={handleClick}
        className={baseClassName}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className={baseClassName}
    >
      {children}
    </a>
  );
}
