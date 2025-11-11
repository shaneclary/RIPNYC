import MonumentCard from "@/components/MonumentCard";
import PricingTable from "@/components/PricingTable";
import BuyCta from "@/components/BuyCta";
import monuments from "@/data/monuments.json";
import lines from "@/data/lines.json";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[72rem] mx-auto px-6 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-unifraktur mb-8 tracking-tight leading-[1.1]">
            Live in the Monument.
          </h1>
          <p className="text-lg md:text-xl text-ash/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Quiet acknowledgments of what ended—and what remains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BuyCta href="#monuments" variant="primary">
              View the drop
            </BuyCta>
            <BuyCta href="/meaning" variant="secondary">
              Read the meaning
            </BuyCta>
          </div>
        </div>
      </section>

      {/* Design Grid */}
      <section id="monuments" className="max-w-[72rem] mx-auto px-6 py-20 scroll-mt-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-unifraktur mb-6 tracking-tight">
            The Collection
          </h2>
          <p className="text-ash/90 max-w-2xl text-base leading-relaxed">
            Six monument designs, each processing the same loss through a
            different emotional and aesthetic lens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monuments.map((monument) => (
            <MonumentCard key={monument.id} monument={monument} />
          ))}
        </div>
      </section>

      {/* Two Lines */}
      <section className="max-w-[72rem] mx-auto px-6 py-20 mt-12 border-t border-hairline">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-unifraktur mb-6 tracking-tight">
            Two Lines
          </h2>
          <p className="text-ash/90 max-w-2xl mb-8 text-base leading-relaxed">
            We offer two production approaches, each with different ethos and
            economics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lines.map((line) => (
            <div
              key={line.id}
              className="p-8 border border-hairline hover:border-white/30 transition-all"
            >
              <h3 className="text-xl font-medium mb-3">{line.name}</h3>
              <p className="text-ash leading-relaxed mb-4">{line.blurb}</p>
              <p className="text-sm text-ash">
                Example wholesale: ${line.wholesaleExample}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 border border-hairline/50 bg-white/[0.02]">
          <p className="text-sm text-ash leading-relaxed">
            <strong className="text-white">Compliance note:</strong> When blanks
            are imported but printing occurs domestically, products are labeled
            "Printed in USA on imported blank." Only garments meeting the FTC
            "all or virtually all" standard carry an unqualified "Made in USA"
            designation. Country-of-origin reflects supplier listings; verify per
            SKU before publishing.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-[72rem] mx-auto px-6 py-16 border-t border-hairline">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-unifraktur mb-4">
            Pricing
          </h2>
          <p className="text-ash max-w-2xl">
            Transparent markup structure across both lines. Adjust wholesale
            inputs to see calculated MSRP.
          </p>
        </div>

        <PricingTable />
      </section>

      {/* Meaning Teaser */}
      <section className="max-w-[72rem] mx-auto px-6 py-16 border-t border-hairline">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-unifraktur mb-6">
            The Lennon Story
          </h2>

          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-ash leading-relaxed mb-4">
              In the autumn of 1980, John Lennon walked around Manhattan in a
              plain white T-shirt that said <strong>NEW YORK CITY</strong> in
              tall, stacked block letters. No logo. No flourish. Just a direct
              statement of fact, rendered in the kind of unglamorous all-caps
              type you'd see on a street sign or a shipping label.
            </p>

            <p className="text-ash leading-relaxed mb-4">
              It wasn't fashion. It was allegiance.
            </p>

            <p className="text-ash leading-relaxed">
              Two months later, he was shot outside the Dakota by a man who had
              asked for his autograph earlier that same day. The{" "}
              <strong>RIP NEW YORK CITY</strong> project begins with that
              shirt—not as imitation, but as inversion...
            </p>
          </div>

          <BuyCta href="/meaning" variant="secondary">
            Read the full story
          </BuyCta>
        </div>
      </section>
    </>
  );
}
