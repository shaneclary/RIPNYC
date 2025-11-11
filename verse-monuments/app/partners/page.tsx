import Link from "next/link";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Monument Circle — Creator Program — Verse-Monuments",
  description: "A creator circle for work that holds. Share the story, earn on the echo. Museum-grade apparel with transparent commissions.",
});

export default function PartnersPage() {
  return (
    <article className="max-w-[72rem] mx-auto px-6 py-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center mb-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-unifraktur mb-8 tracking-tight leading-[1.1]">
          Living in the Monument
        </h1>
        <p className="text-xl md:text-2xl text-ash/90 mb-6 leading-relaxed">
          Monument Circle — Creator Program
        </p>
        <p className="text-lg text-ash/90 mb-12 leading-relaxed max-w-2xl mx-auto">
          A creator circle for work that holds. Share the story, earn on the echo.
        </p>
        <Link
          href="/partners/apply"
          className="inline-block px-8 py-4 bg-white text-ink font-medium hover:bg-ash transition-colors duration-300"
        >
          Apply to Monument Circle
        </Link>
      </section>

      {/* Why This */}
      <section className="max-w-3xl mx-auto mb-32 border-t border-hairline pt-20">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Why this
        </h2>
        <p className="text-lg text-ash/90 leading-relaxed mb-6">
          Not merch—<strong className="text-white">memorials in motion</strong>. Museum-grade prints.
          Transparent lines (USA Maker & Made in Bangladesh). You bring the audience; we bring the reliquary.
        </p>
      </section>

      {/* How it Works */}
      <section className="max-w-5xl mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-12 tracking-tight text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-hairline bg-white/[0.02]">
            <div className="text-4xl font-unifraktur mb-4">1</div>
            <h3 className="text-xl font-medium mb-3">Apply</h3>
            <p className="text-ash/90 text-sm leading-relaxed">
              Brief form; we look for voice fit and care for craft.
            </p>
          </div>
          <div className="p-8 border border-hairline bg-white/[0.02]">
            <div className="text-4xl font-unifraktur mb-4">2</div>
            <h3 className="text-xl font-medium mb-3">Receive your kit</h3>
            <p className="text-ash/90 text-sm leading-relaxed">
              Unique referral link + custom code, asset pack, brand guide.
            </p>
          </div>
          <div className="p-8 border border-hairline bg-white/[0.02]">
            <div className="text-4xl font-unifraktur mb-4">3</div>
            <h3 className="text-xl font-medium mb-3">Share & earn</h3>
            <p className="text-ash/90 text-sm leading-relaxed">
              Your audience saves 10%; you earn on each sale attributed by code, link, or UTM.
            </p>
          </div>
        </div>
      </section>

      {/* Commissions */}
      <section className="max-w-5xl mx-auto mb-32 border-t border-hairline pt-20">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Commission & tiers
        </h2>
        <p className="text-ash/90 mb-8 leading-relaxed">
          We price intentionally and split fairly. Commissions are paid on <strong className="text-white">net merchandise</strong> (after discounts, before tax/shipping).
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-hairline">
            <thead className="bg-white/[0.02]">
              <tr>
                <th className="p-4 text-left border-b border-hairline font-medium">Line</th>
                <th className="p-4 text-left border-b border-hairline font-medium">What it is</th>
                <th className="p-4 text-right border-b border-hairline font-medium">Base</th>
                <th className="p-4 text-right border-b border-hairline font-medium">Tier I (≥25/mo)</th>
                <th className="p-4 text-right border-b border-hairline font-medium">Tier II (≥75/mo)</th>
                <th className="p-4 text-right border-b border-hairline font-medium">Floor/tee</th>
              </tr>
            </thead>
            <tbody className="text-ash/90">
              <tr>
                <td className="p-4 border-b border-hairline/50 font-medium text-white">USA Maker</td>
                <td className="p-4 border-b border-hairline/50">USA-sourced & printed</td>
                <td className="p-4 text-right border-b border-hairline/50">20%</td>
                <td className="p-4 text-right border-b border-hairline/50">25%</td>
                <td className="p-4 text-right border-b border-hairline/50">30%</td>
                <td className="p-4 text-right border-b border-hairline/50">$8</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Bangladesh Vibe</td>
                <td className="p-4">Organic, Made in Bangladesh</td>
                <td className="p-4 text-right">15%</td>
                <td className="p-4 text-right">20%</td>
                <td className="p-4 text-right">25%</td>
                <td className="p-4 text-right">$6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 text-sm text-ash/90 leading-relaxed">
          <p>• <strong className="text-white">You earn the higher of % or floor $/tee.</strong></p>
          <p>• Limited drops / numbered editions may carry bespoke rates (we'll state upfront).</p>
          <p>• <strong className="text-white">Bonuses:</strong> +$250 at 100 orders/month; +$1,000 at 500 orders/quarter.</p>
          <p>• <strong className="text-white">Payouts:</strong> Monthly (NET-15) via PayPal or Wise. Minimum $50; unused rolls over.</p>
        </div>
      </section>

      {/* Attribution Logic */}
      <section className="max-w-3xl mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Attribution logic
        </h2>
        <div className="space-y-3 text-sm text-ash/90 leading-relaxed">
          <p>• <strong className="text-white">Primary:</strong> Referral link with 30-day cookie (<code className="text-white">?aff=CODE</code> + UTM bundle).</p>
          <p>• <strong className="text-white">Stacked:</strong> Discount code at checkout overrides all else in your favor.</p>
          <p>• <strong className="text-white">Fallback:</strong> Last-click UTM (<code className="text-white">utm_content=aff_CODE</code>).</p>
          <p>• <strong className="text-white">Manual backup:</strong> If a buyer mentions you in order notes, we honor it.</p>
        </div>
      </section>

      {/* Creator Perks */}
      <section className="max-w-3xl mx-auto mb-32 border-t border-hairline pt-20">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Creator perks
        </h2>
        <div className="space-y-3 text-ash/90 leading-relaxed">
          <p>• <strong className="text-white">Early access:</strong> first look at new monuments (previews, sample pulls).</p>
          <p>• <strong className="text-white">Gallery loan:</strong> museum-card story blurbs you can quote, on brand.</p>
          <p>• <strong className="text-white">Creator pricing:</strong> 40% off personal wear/test fits (non-commission).</p>
          <p>• <strong className="text-white">Co-stamp</strong> (select drops): your micro-sigil on care card or hem label.</p>
        </div>
      </section>

      {/* Ethics & Label */}
      <section className="max-w-3xl mx-auto mb-32">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Ethics & Label
        </h2>
        <p className="text-lg text-ash/90 mb-6 leading-relaxed italic">
          Memento mori / memento vivere. We remember to live by honoring the making.
        </p>
        <div className="space-y-4 text-ash/90 leading-relaxed">
          <p>
            <strong className="text-white">USA Maker:</strong> USA-made & printed.
          </p>
          <p>
            <strong className="text-white">Bangladesh Vibe:</strong> Organic Printful, Made in Bangladesh;
            we publish factory info and audits; we earmark 1% to river & worker initiatives.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-32 border-t border-hairline pt-20">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-12 tracking-tight">
          Frequently asked
        </h2>
        <div className="space-y-8">
          <details className="group">
            <summary className="cursor-pointer text-lg font-medium hover:text-ash transition-colors list-none flex items-start justify-between">
              <span>When do I get paid?</span>
              <span className="text-ash ml-4">+</span>
            </summary>
            <p className="mt-4 text-ash/90 leading-relaxed pl-0">
              Net-15 monthly via PayPal or Wise. Minimum payout is $50; anything below rolls over to the next month.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-lg font-medium hover:text-ash transition-colors list-none flex items-start justify-between">
              <span>How are returns handled?</span>
              <span className="text-ash ml-4">+</span>
            </summary>
            <p className="mt-4 text-ash/90 leading-relaxed pl-0">
              Commission reversals only if refunded. Exchanges don't affect your commission.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-lg font-medium hover:text-ash transition-colors list-none flex items-start justify-between">
              <span>Can I run ads?</span>
              <span className="text-ash ml-4">+</span>
            </summary>
            <p className="mt-4 text-ash/90 leading-relaxed pl-0">
              No bidding on brand terms without approval. Whitelisting available by request.
            </p>
          </details>

          <details className="group">
            <summary className="cursor-pointer text-lg font-medium hover:text-ash transition-colors list-none flex items-start justify-between">
              <span>Can I co-design?</span>
              <span className="text-ash ml-4">+</span>
            </summary>
            <p className="mt-4 text-ash/90 leading-relaxed pl-0">
              Yes—pitch a monument; co-stamp rates by project.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto text-center border-t border-hairline pt-20">
        <h2 className="text-3xl md:text-4xl font-unifraktur mb-8 tracking-tight">
          Ready to join?
        </h2>
        <p className="text-lg text-ash/90 mb-8 leading-relaxed">
          Live in the Monument. Earn on every echo.
        </p>
        <Link
          href="/partners/apply"
          className="inline-block px-8 py-4 bg-white text-ink font-medium hover:bg-ash transition-colors duration-300"
        >
          Apply to Monument Circle
        </Link>
      </section>
    </article>
  );
}
