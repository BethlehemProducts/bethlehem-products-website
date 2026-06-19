import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12">
 <Image
  src="/logos/logo2-transparent.png"
  alt="Bethlehem Products Inc logo"
  fill
  priority
  className="object-contain"
 />
</div>

    
          <div className="hidden sm:block">
            <p className="text-lg font-bold text-white">
              Bethlehem Products Inc.
            </p>
            <p className="text-xs text-[#C9A84C]">
              Delivering Quality. Building Trust.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white md:flex">
          <a href="/" className="hover:text-[#C9A84C]">
            Home
          </a>
          <a href="#products" className="hover:text-[#C9A84C]">
            Products
          </a>
          <a href="#about" className="hover:text-[#C9A84C]">
            About
          </a>
          <a href="#partners" className="hover:text-[#C9A84C]">
            Partners
          </a>
          <a href="#contact" className="hover:text-[#C9A84C]">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-[#C9A84C] px-6 py-3 font-bold text-black hover:bg-[#b89536]"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}