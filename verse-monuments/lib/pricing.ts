/**
 * Calculate MSRP from wholesale price and markup percentage
 * @param wholesale - Base wholesale price
 * @param markupPct - Markup as decimal (e.g., 1.50 for 150%)
 * @returns MSRP rounded to 2 decimal places
 */
export function msrp(wholesale: number, markupPct: number): number {
  return +(wholesale * (1 + markupPct)).toFixed(2);
}

/**
 * Calculate USA line markup by adding the USA premium to standard markup
 * @param stdMarkup - Standard markup percentage (e.g., 1.50)
 * @param usaPremium - Additional USA premium (e.g., 0.25)
 * @returns Combined USA markup
 */
export function usaMarkup(stdMarkup: number, usaPremium: number): number {
  return stdMarkup + usaPremium;
}

/**
 * Format price for display
 * @param price - Price to format
 * @returns Formatted price string (e.g., "$45.00")
 */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
