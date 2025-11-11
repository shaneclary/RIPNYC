import Link from "next/link";

export default function VerseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline mt-32" role="contentinfo">
      <div className="max-w-[72rem] mx-auto px-6 py-16">
        <div className="flex flex-col gap-8 text-sm text-ash">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-unifraktur text-2xl text-white tracking-wide">Verse-Monuments</p>
            <nav className="flex gap-6 text-sm">
              <Link href="/#monuments" className="hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/meaning" className="hover:text-white transition-colors">
                Meaning
              </Link>
              <Link href="/partners" className="hover:text-white transition-colors">
                Partners
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-hairline">
            <p className="text-xs leading-relaxed max-w-4xl opacity-75">
              © {currentYear} Verse-Monuments — Country-of-origin reflects supplier listings.
              Verify per SKU before publishing. When blanks are imported but
              printing occurs domestically, products are labeled "Printed in USA
              on imported blank." Only garments meeting FTC "all or virtually all"
              standard carry unqualified "Made in USA" designation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
