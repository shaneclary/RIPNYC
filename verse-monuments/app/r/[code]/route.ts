import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Referral } from "@/lib/referrals";

const REFERRALS_FILE = path.join(process.cwd(), "data", "referrals.json");

async function getReferrals(): Promise<Referral[]> {
  try {
    const data = await fs.readFile(REFERRALS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;

  // Look up referral code
  const referrals = await getReferrals();
  const referral = referrals.find(
    (r) => r.code.toLowerCase() === code.toLowerCase()
  );

  // If referral doesn't exist, redirect to home without setting cookie
  if (!referral) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Create redirect response to home page
  const response = NextResponse.redirect(new URL("/", request.url));

  // Set 30-day attribution cookie
  const maxAge = 30 * 24 * 60 * 60; // 30 days in seconds
  response.cookies.set("verse_aff", referral.code, {
    maxAge,
    path: "/",
    httpOnly: false, // Needs to be readable by client for checkout
    sameSite: "lax",
  });

  // Also track UTM parameters if present
  const utmSource = request.nextUrl.searchParams.get("utm_source");
  const utmMedium = request.nextUrl.searchParams.get("utm_medium");
  const utmCampaign = request.nextUrl.searchParams.get("utm_campaign");

  if (utmSource || utmMedium || utmCampaign) {
    const utmData = {
      source: utmSource || "",
      medium: utmMedium || "",
      campaign: utmCampaign || "",
      affiliate: referral.code,
    };
    response.cookies.set("verse_utm", JSON.stringify(utmData), {
      maxAge,
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });
  }

  return response;
}
