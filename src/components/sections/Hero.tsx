import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden text-white">
     <Image
  src="/images/hero/hero-modern1.png"
  alt="Bethlehem Products Inc import distribution"
  fill
  priority
  className="object-cover object-center"
/>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-10 pt-32">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#C9A84C]">
            Ontario, Canada · Importer & Distributor
          </p>

          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <>
  Connecting Quality
  <br />
  Products from India
  <br />
  to Canada
</>
          </h1>

          <div className="my-8 h-1 w-24 bg-[#C9A84C]" />

          <p className="max-w-2xl text-xl leading-relaxed text-white/90">
            Bethlehem Products Inc. supplies premium South Indian food products
            to Canadian retailers, wholesalers, and distribution partners.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-[#C9A84C] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-[#b89536]"
            >
              View Products
            </a>

            <a
              href="#contact"
              className="border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}