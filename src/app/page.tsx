import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Image from "next/image";

const products = [
  {
    name: "KML Coconut Oil 500 mL",
    image: "/images/products/kml-500ml.jpg",
    description:
      "Compact retail size for everyday cooking and convenient shelf placement.",
  },
  {
    name: "KML Coconut Oil 1 L",
    image: "/images/products/kml-1l.jpg",
    description:
      "Core family-size product designed for regular grocery retail demand.",
  },
  {
    name: "KML Coconut Oil 2 L",
    image: "/images/products/kml-2l.jpg",
    description:
      "High-value format for families, bulk buyers, and wholesale customers.",
  },
];

const strengths = [
  "Canadian Importer",
  "Ontario Based",
  "Trusted Manufacturers",
  "Quality Focused",
  "Retail Partnerships",
  "Reliable Supply",
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* About */}
        <section id="about" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                  About Bethlehem Products Inc.
                </p>

                <h2 className="max-w-4xl text-4xl font-bold leading-tight text-[#123E2F] md:text-5xl">
                  A Canadian importer and distributor built on quality, trust,
                  and reliable supply.
                </h2>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600">
                  Bethlehem Products Inc. connects trusted overseas manufacturers
                  with Canadian retailers, wholesalers, distributors, and food
                  service businesses. Our launch focus is premium South Indian
                  food products for retail and wholesale distribution across
                  Canada.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-[#F7F5EF] p-8 shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9A84C]">
                  What We Do
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    [
                      "Importing",
                      "Sourcing quality food products from established international manufacturers.",
                    ],
                    [
                      "Distribution",
                      "Supplying retailers, supermarkets, wholesalers, and food service businesses.",
                    ],
                    [
                      "Retail Partnerships",
                      "Building long-term supply relationships through professional service.",
                    ],
                  ].map(([title, text]) => (
                    <div key={title} className="border-l-4 border-[#C9A84C] pl-5">
                      <h3 className="text-xl font-bold text-[#123E2F]">{title}</h3>
                      <p className="mt-2 text-gray-600">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#F7F5EF] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                Why Choose Us
              </p>

              <h2 className="text-4xl font-bold text-[#123E2F] md:text-5xl">
                Built for retailers who need dependable supply partners.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#123E2F] text-lg font-bold text-[#C9A84C]">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#123E2F]">{item}</h3>
                  <p className="mt-3 text-gray-600">
                    Professional import and distribution support designed for
                    grocery retailers, wholesalers, and distribution partners.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 max-w-4xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                Product Range
              </p>

              <h2 className="text-4xl font-bold text-[#123E2F] md:text-5xl">
                Products available for retail and wholesale distribution.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                The current launch range focuses on KML Coconut Oil in 500 mL,
                1 L, and 2 L sizes for Canadian grocery retailers and wholesale
                customers.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-[#F7F5EF] shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-[360px] bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#123E2F]">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-gray-600">{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Retail Partners */}
        <section id="partners" className="bg-[#123E2F] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
                  Retail & Distribution Partners
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Partner with Bethlehem Products Inc. to stock trusted South
                  Indian food products.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                  We work with grocery stores, supermarkets, wholesalers, and
                  distributors looking for reliable Canadian supply of premium
                  imported food products.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
                <h3 className="text-3xl font-bold text-[#C9A84C]">
                  KM Oil Industries
                </h3>

                <p className="mt-4 text-white/75">
                  Trusted manufacturing partner from India and producer of the
                  KML coconut oil product range.
                </p>

                <ul className="mt-8 space-y-4 text-white/85">
                  <li>✓ Established coconut oil manufacturer</li>
                  <li>✓ Export-focused production</li>
                  <li>✓ Quality-controlled manufacturing</li>
                  <li>✓ Product of India</li>
                  <li>✓ KML coconut oil launch range</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#C9A84C]">
              Contact
            </p>

            <h2 className="text-4xl font-bold text-[#123E2F] md:text-5xl">
              Looking for a reliable distribution partner?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Contact Bethlehem Products Inc. to discuss retail, wholesale, and
              distribution opportunities across Canada.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sales@bethlehemproducts.ca"
                className="rounded-sm bg-[#123E2F] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#0B2F24]"
              >
                Contact Sales
              </a>

              <a
                href="mailto:info@bethlehemproducts.ca"
                className="rounded-sm border border-[#123E2F]/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#123E2F] hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                General Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
