import Image from "next/image";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#184D3B] text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <a href="/" className="flex items-center">
          <Image
            src="/logos/bethlehem-logo.png"
            alt="Bethlehem Products Inc."
            width={220}
            height={60}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium">

          <a href="/" className="hover:text-[#C9A84C] transition">
            Home
          </a>

          <a href="/products" className="hover:text-[#C9A84C] transition">
            Products
          </a>

          <a href="/about" className="hover:text-[#C9A84C] transition">
            About
          </a>

          <a href="#partners" className="hover:text-[#C9A84C] transition">
            Partners
          </a>

          <a href="/contact" className="hover:text-[#C9A84C] transition">
            Contact
          </a>

          <a
            href="mailto:sales@bethlehemproducts.ca"
            className="bg-[#C9A84C] px-5 py-2 rounded-sm font-semibold hover:bg-[#D4AF37] transition"
          >
            Get a Quote
          </a>

        </nav>

      </div>
    </header>
  );
}