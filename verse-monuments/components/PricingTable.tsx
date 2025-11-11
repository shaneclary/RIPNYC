"use client";

import { useState } from "react";
import { msrp, usaMarkup, formatPrice } from "@/lib/pricing";
import monuments from "@/data/monuments.json";
import lines from "@/data/lines.json";

export default function PricingTable() {
  const stdLine = lines.find((l) => l.id === "standard");
  const usaLine = lines.find((l) => l.id === "usa");

  const [stdWholesale, setStdWholesale] = useState(
    stdLine?.wholesaleExample || 18
  );
  const [usaWholesale, setUsaWholesale] = useState(
    usaLine?.wholesaleExample || 28
  );

  return (
    <div className="w-full">
      <div className="mb-8 p-8 border border-hairline bg-white/[0.02] rounded-sm">
        <h3 className="text-lg font-medium mb-6 tracking-tight">Wholesale Price Inputs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="std-wholesale" className="block text-sm text-ash mb-3 tracking-wide">
              Standard Wholesale ($)
            </label>
            <input
              id="std-wholesale"
              type="number"
              value={stdWholesale}
              onChange={(e) => setStdWholesale(Number(e.target.value))}
              className="w-full px-4 py-3 bg-ink border border-hairline text-white focus:border-white focus:outline-none transition-colors duration-300 rounded-sm"
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label htmlFor="usa-wholesale" className="block text-sm text-ash mb-3 tracking-wide">
              USA Wholesale ($)
            </label>
            <input
              id="usa-wholesale"
              type="number"
              value={usaWholesale}
              onChange={(e) => setUsaWholesale(Number(e.target.value))}
              className="w-full px-4 py-3 bg-ink border border-hairline text-white focus:border-white focus:outline-none transition-colors duration-300 rounded-sm"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto border border-hairline rounded-sm">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-white/[0.02]">
            <tr className="border-b border-hairline">
              <th className="text-left py-4 px-4 font-medium tracking-wide">Monument</th>
              <th className="text-left py-4 px-4 font-medium tracking-wide">Line</th>
              <th className="text-right py-4 px-4 font-medium tracking-wide">Std Markup</th>
              <th className="text-right py-4 px-4 font-medium tracking-wide">USA Markup</th>
              <th className="text-right py-4 px-4 font-medium tracking-wide">MSRP Std</th>
              <th className="text-right py-4 px-4 font-medium tracking-wide">MSRP USA</th>
            </tr>
          </thead>
          <tbody>
            {monuments.map((monument) => {
              const stdMSRP = msrp(stdWholesale, monument.markupStd);
              const usaMSRP = msrp(
                usaWholesale,
                usaMarkup(monument.markupStd, monument.markupUsaExtra)
              );

              return (
                <tr key={monument.id} className="border-b border-hairline/50">
                  <td className="py-4 px-4">{monument.title}</td>
                  <td className="py-4 px-4 text-ash capitalize">
                    {monument.line}
                  </td>
                  <td className="py-4 px-4 text-right text-ash">
                    {(monument.markupStd * 100).toFixed(0)}%
                  </td>
                  <td className="py-4 px-4 text-right text-ash">
                    {(usaMarkup(monument.markupStd, monument.markupUsaExtra) * 100).toFixed(0)}%
                  </td>
                  <td className="py-4 px-4 text-right font-medium">
                    {formatPrice(stdMSRP)}
                  </td>
                  <td className="py-4 px-4 text-right font-medium">
                    {monument.line === "usa" ? "—" : formatPrice(usaMSRP)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-6 border border-hairline/50 bg-white/[0.02] text-xs text-ash/80 leading-relaxed rounded-sm">
        <p>
          <strong className="text-white">Note:</strong> Prices shown are calculated MSRP based on
          wholesale inputs and markup percentages. USA pricing adds +25
          percentage points to standard markup. Actual retail pricing may vary by
          platform and should be verified per SKU.
        </p>
      </div>
    </div>
  );
}
