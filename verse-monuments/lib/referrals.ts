/**
 * Referral and Affiliate Tracking System
 */

export interface Referral {
  code: string; // Unique referral code (e.g., "ABC12345")
  discountCode: string; // Associated discount code (e.g., "QUICK10ABC")
  affiliateType: "circle" | "quick"; // Monument Circle or Quick Referral
  email: string;
  paymentMethod: "paypal" | "venmo" | "wise";
  paymentInfo: string; // PayPal email, Venmo handle, etc.
  commissionRate: number; // Decimal (e.g., 0.12 for 12%, 0.20 for 20%)
  createdAt: string;
  tier?: number; // For Circle members (1, 2, or base)
  salesCount?: number; // Track total sales
  totalEarnings?: number; // Track lifetime earnings
}

export interface DiscountCode {
  code: string;
  type: "affiliate" | "promo";
  discountPercent: number; // Customer discount (usually 10%)
  affiliateCode?: string; // Links back to referral code
  expiresAt?: string;
  maxUses?: number;
  currentUses?: number;
}

/**
 * Calculate commission based on affiliate type and tier
 */
export function calculateCommission(
  referral: Referral,
  subtotal: number,
  productLine: "standard" | "usa"
): number {
  let rate = referral.commissionRate;

  // Monument Circle tier bonuses
  if (referral.affiliateType === "circle" && referral.tier) {
    if (referral.tier === 1) {
      rate += 0.05; // +5% for Tier I
    } else if (referral.tier === 2) {
      rate += 0.10; // +10% for Tier II
    }
  }

  // Calculate commission
  const commission = subtotal * rate;

  // Apply floor per tee if applicable
  const floor = productLine === "usa" ? 8 : 6;
  // Note: Would need item count to properly apply floor - simplified here

  return commission;
}

/**
 * Validate and apply discount code
 */
export function validateDiscountCode(
  code: string,
  discountCodes: DiscountCode[]
): { valid: boolean; discount?: DiscountCode; error?: string } {
  const discount = discountCodes.find(
    (d) => d.code.toUpperCase() === code.toUpperCase()
  );

  if (!discount) {
    return { valid: false, error: "Invalid discount code" };
  }

  if (discount.expiresAt && new Date(discount.expiresAt) < new Date()) {
    return { valid: false, error: "This code has expired" };
  }

  if (
    discount.maxUses &&
    discount.currentUses &&
    discount.currentUses >= discount.maxUses
  ) {
    return { valid: false, error: "This code has reached its usage limit" };
  }

  return { valid: true, discount };
}

/**
 * Attribution logic (discount code > referral cookie > UTM)
 */
export function getAttribution(
  discountCode?: string,
  referralCookie?: string,
  utmContent?: string
): { affiliateCode?: string; source: "discount" | "referral" | "utm" | "none" } {
  // Priority 1: Discount code (overrides all)
  if (discountCode) {
    return { affiliateCode: discountCode, source: "discount" };
  }

  // Priority 2: Referral cookie (30-day attribution)
  if (referralCookie) {
    return { affiliateCode: referralCookie, source: "referral" };
  }

  // Priority 3: UTM parameter
  if (utmContent?.includes("aff_")) {
    const affiliateCode = utmContent.replace("aff_", "");
    return { affiliateCode, source: "utm" };
  }

  return { source: "none" };
}

/**
 * Generate a unique referral code
 */
export function generateUniqueCode(length: number = 8): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Create discount code from referral code
 */
export function createDiscountCode(referralCode: string): string {
  // Format: First 6 chars + random 10 chars
  const prefix = referralCode.slice(0, 6).toUpperCase();
  const suffix = generateUniqueCode(10);
  return `${prefix}${suffix}`;
}
