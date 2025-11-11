import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Referral, DiscountCode } from "@/lib/referrals";

const REFERRALS_FILE = path.join(process.cwd(), "data", "referrals.json");
const DISCOUNTS_FILE = path.join(process.cwd(), "data", "discounts.json");

async function getReferrals(): Promise<Referral[]> {
  try {
    const data = await fs.readFile(REFERRALS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function getDiscounts(): Promise<DiscountCode[]> {
  try {
    const data = await fs.readFile(DISCOUNTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveReferrals(referrals: Referral[]): Promise<void> {
  await fs.writeFile(REFERRALS_FILE, JSON.stringify(referrals, null, 2));
}

async function saveDiscounts(discounts: DiscountCode[]): Promise<void> {
  await fs.writeFile(DISCOUNTS_FILE, JSON.stringify(discounts, null, 2));
}

// GET - Lookup referral by code
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Code parameter required" }, { status: 400 });
  }

  const referrals = await getReferrals();
  const referral = referrals.find((r) => r.code.toLowerCase() === code.toLowerCase());

  if (!referral) {
    return NextResponse.json({ error: "Referral not found" }, { status: 404 });
  }

  return NextResponse.json({ referral });
}

// POST - Create new referral
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, discountCode, affiliateType, email, paymentMethod, paymentInfo, commissionRate } = body;

    // Validate required fields
    if (!code || !discountCode || !affiliateType || !email || !paymentMethod || !paymentInfo) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const referrals = await getReferrals();
    const discounts = await getDiscounts();

    // Check for duplicate codes
    if (referrals.find((r) => r.code === code)) {
      return NextResponse.json(
        { error: "Referral code already exists" },
        { status: 409 }
      );
    }

    // Create referral
    const newReferral: Referral = {
      code,
      discountCode,
      affiliateType,
      email,
      paymentMethod,
      paymentInfo,
      commissionRate: commissionRate || (affiliateType === "quick" ? 0.12 : 0.15),
      createdAt: new Date().toISOString(),
      salesCount: 0,
      totalEarnings: 0,
    };

    // Create discount code
    const newDiscount: DiscountCode = {
      code: discountCode,
      type: "affiliate",
      discountPercent: 10, // Customer gets 10% off
      affiliateCode: code,
      currentUses: 0,
    };

    referrals.push(newReferral);
    discounts.push(newDiscount);

    await saveReferrals(referrals);
    await saveDiscounts(discounts);

    return NextResponse.json({
      success: true,
      referral: newReferral,
      discount: newDiscount,
    });
  } catch (error) {
    console.error("Referral creation error:", error);
    return NextResponse.json(
      { error: "Failed to create referral" },
      { status: 500 }
    );
  }
}
