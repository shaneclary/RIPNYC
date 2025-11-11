import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { DiscountCode, Referral } from "@/lib/referrals";
import { validateDiscountCode } from "@/lib/referrals";

const DISCOUNTS_FILE = path.join(process.cwd(), "data", "discounts.json");
const REFERRALS_FILE = path.join(process.cwd(), "data", "referrals.json");

async function getDiscounts(): Promise<DiscountCode[]> {
  try {
    const data = await fs.readFile(DISCOUNTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function getReferrals(): Promise<Referral[]> {
  try {
    const data = await fs.readFile(REFERRALS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const { code, subtotal } = await request.json();

    if (!code) {
      return NextResponse.json(
        { valid: false, error: "Discount code required" },
        { status: 400 }
      );
    }

    const discounts = await getDiscounts();
    const result = validateDiscountCode(code, discounts);

    if (!result.valid || !result.discount) {
      return NextResponse.json(result, { status: 200 });
    }

    // Calculate discount amount
    const discountAmount = subtotal
      ? (subtotal * result.discount.discountPercent) / 100
      : 0;

    // Get affiliate info if this is an affiliate code
    let affiliate = null;
    if (result.discount.affiliateCode) {
      const referrals = await getReferrals();
      affiliate = referrals.find(
        (r) =>
          r.code === result.discount!.affiliateCode ||
          r.discountCode === result.discount!.code
      );
    }

    return NextResponse.json({
      valid: true,
      discount: result.discount,
      discountAmount,
      affiliate: affiliate
        ? {
            code: affiliate.code,
            type: affiliate.affiliateType,
            commissionRate: affiliate.commissionRate,
          }
        : null,
    });
  } catch (error) {
    console.error("Discount validation error:", error);
    return NextResponse.json(
      { valid: false, error: "Failed to validate discount code" },
      { status: 500 }
    );
  }
}
