import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#123E2F] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#123E2F] via-[#184D3B] to-[#123E2F]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            Ontario, Canada · South Indian Products
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            Premium South Indian Products Distributed Across Canada
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Supplying KML coconut oils, coconut products, and specialty grocery
            products to retailers, wholesalers, and distributors across Canada.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-sm bg-[#C9A84C] px-7 py-4 font-semibold text-white transition hover:bg-[#D4AF37]"
            >
              View Products
            </a>

            <a
              href="#partners"
              className="rounded-sm border border-white/40 px-7 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              Become a Retail Partner
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/70 md:grid-cols-4">
            <div>CFIA Ready</div>
            <div>India Sourced</div>
            <div>Wholesale Supply</div>
            <div>Ontario Based</div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-end justify-center gap-4">
  <div className="absolute bottom-0 h-72 w-72 rounded-full bg-[#C9A84C]/20 blur-3xl" />

  <div className="relative z-10 rounded-2xl bg-white/95 p-6 shadow-2xl">
    <Image
      src="/images/products/kml-500ml.jpg"
      alt="KML Coconut Oil 500mL"
      width={260}
      height={420}
      className="h-[260px] w-auto object-contain"
      priority
    />
  </div>

  <div className="relative z-20 rounded-2xl bg-white/95 p-6 shadow-2xl -mb-6">
    <Image
      src="/images/products/kml-1l.jpg"
      alt="KML Coconut Oil 1L"
     width={320}
     height={500}
      className="h-[310px] w-auto object-contain"
      priority
    />
  </div>

  <div className="relative z-10 rounded-2xl bg-white/95 p-6 shadow-2xl">
    <Image
      src="/images/products/kml-2l.jpg"
      alt="KML Coconut Oil 2L"
      width={300}
      height={460}
      className="h-[280px] w-auto object-contain"
      priority
    />
  </div>
</div>
      </div>
    </section>
  );
}