import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#123E2F] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#123E2F] via-[#184D3B] to-[#123E2F]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            Ontario, Canada · Importer & Distributor
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-6xl">
            Premium Food Import & Distribution Across Canada
          </h1>

          <p className="mt-4 text-xl font-medium text-[#C9A84C]">
            Delivering Quality. Building Trust.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Bethlehem Products Inc. connects trusted international manufacturers
            with Canadian retailers, wholesalers, and food service businesses
            through reliable supply, premium products, and long-term partnerships.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#partners"
              className="rounded-sm bg-[#C9A84C] px-7 py-4 font-semibold text-white transition hover:bg-[#D4AF37]"
            >
              Become a Retail Partner
            </a>

            <a
              href="#products"
              className="rounded-sm border border-white/40 px-7 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              View Products
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-[#C9A84C]">
            Serving Retailers • Wholesalers • Food Service Businesses
          </p>

          <p className="mt-3 text-sm text-white/65">
            Proudly based in Ontario, serving retailers across Canada.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/70 md:grid-cols-4">
            <div>Importer & Distributor</div>
            <div>Wholesale Supply</div>
            <div>Retail Partnerships</div>
            <div>Ontario Based</div>
          </div>
        </div>

        <div className="relative hidden items-end justify-center gap-5 lg:flex">
          <div className="absolute bottom-0 h-72 w-72 rounded-full bg-[#C9A84C]/20 blur-3xl" />

          <div className="relative z-10 rounded-2xl bg-white/95 p-4 shadow-2xl">
            <Image
              src="/images/products/kml-500ml.jpg"
              alt="KML Coconut Oil 500mL"
              width={260}
              height={420}
              className="h-[340px] w-auto object-contain"
              priority
            />
          </div>

          <div className="relative z-20 -mb-6 rounded-2xl bg-white/95 p-4 shadow-2xl">
            <Image
              src="/images/products/kml-1l.jpg"
              alt="KML Coconut Oil 1L"
              width={320}
              height={500}
              className="h-[400px] w-auto object-contain"
              priority
            />
          </div>

          <div className="relative z-10 rounded-2xl bg-white/95 p-4 shadow-2xl">
            <Image
              src="/images/products/kml-2l.jpg"
              alt="KML Coconut Oil 2L"
              width={300}
              height={460}
              className="h-[370px] w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}