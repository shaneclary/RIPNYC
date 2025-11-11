export default function VerseFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline mt-32" role="contentinfo">
      <div className="max-w-[72rem] mx-auto px-6 py-16">
        <div className="flex flex-col gap-8 text-sm text-ash">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-unifraktur text-2xl text-white tracking-wide">VERSE</p>
            <p className="italic">A timestamp in cloth.</p>
          </div>

          <div className="pt-8 border-t border-hairline">
            <p className="text-xs leading-relaxed max-w-4xl opacity-75">
              © {currentYear} VERSE — Country-of-origin reflects supplier listings.
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
