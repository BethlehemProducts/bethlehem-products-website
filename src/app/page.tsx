import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Image from "next/image";

const products = [
  {
    name: "KML Coconut Oil 500mL",
    image: "/images/products/kml-500ml.jpg",
    description: "Premium edible coconut oil.",
  },
  {
    name: "KML Coconut Oil 1L",
    image: "/images/products/kml-1l.jpg",
    description: "Ideal for family and retail use.",
  },
  {
    name: "KML Coconut Oil 2L",
    image: "/images/products/kml-2l.jpg",
    description: "Perfect for high-volume cooking.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="bg-[#123E2F] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["B2B", "Retail & Wholesale"],
                ["ON", "Ontario Based"],
                ["India", "Trusted Supply Partners"],
                ["KML", "Launch Product Range"],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3 className="text-4xl font-bold text-[#C9A84C]">
                    {title}
                  </h3>
                  <p className="text-white">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] font-semibold uppercase tracking-[0.25em] mb-4">
                What We Do
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-[#184D3B]">
                Canadian Import, Distribution, and Retail Supply
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                [
                  "Importing",
                  "We source premium food products from trusted international manufacturers.",
                ],
                [
                  "Distribution",
                  "We supply grocery retailers, supermarkets, wholesalers, and food service businesses.",
                ],
                [
                  "Retail Partnerships",
                  "We build long-term relationships through reliable supply and professional service.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl bg-gray-50 p-8 shadow-sm border">
                  <h3 className="text-2xl font-bold mb-4 text-[#184D3B]">
                    {title}
                  </h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
<section className="bg-white py-16 border-b">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <p className="text-[#C9A84C] font-semibold uppercase tracking-[0.25em] mb-4">
      Quality & Compliance
    </p>

    <h2 className="text-4xl font-bold text-[#184D3B] mb-10">
      Built on Quality, Trust, and Reliable Supply
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

      {[
        "HACCP",
        "ISO 22000",
        "Halal",
        "Kosher",
        "Export Quality",
      ].map((item) => (
        <div
          key={item}
          className="rounded-xl border bg-gray-50 p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#184D3B] text-[#C9A84C] font-bold">
            ✓
          </div>

          <h3 className="font-bold text-[#184D3B]">
            {item}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>
<section className="bg-[#F7F5EF] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      <div>
        <p className="text-[#C9A84C] font-semibold uppercase tracking-[0.25em] mb-4">
          Manufacturing Partner
        </p>

        <h2 className="text-5xl font-bold text-[#184D3B] mb-6">
          Partnered With Trusted Manufacturers From India
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Bethlehem Products Inc. works with established manufacturers to bring
          premium South Indian food products to Canadian retailers and wholesalers.
        </p>

        <p className="text-lg text-gray-700">
          Our focus is on quality, consistency, and reliable supply so retailers
          can confidently stock products that customers already know and trust.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <h3 className="text-3xl font-bold text-[#184D3B] mb-6">
          KM Oil Industries
        </h3>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>✓ Established coconut oil manufacturer</li>
          <li>✓ Export-focused production</li>
          <li>✓ Quality-controlled manufacturing</li>
          <li>✓ Product of India</li>
          <li>✓ KML coconut oil product range</li>
        </ul>
      </div>

    </div>

  </div>
</section>

        <section id="products" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-12 text-[#184D3B]">
              Products Available For Retail & Wholesale Distribution
            </h2>
<p className="mt-4 mb-12 text-lg text-gray-600 max-w-3xl">
  The current launch range focuses on KML Coconut Oil in 500 mL, 1 L,
  and 2 L sizes for retail and wholesale distribution.
</p>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  <div className="relative h-[350px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-[#184D3B]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#C9A84C] font-semibold uppercase tracking-[0.25em] mb-4">
                  About Bethlehem Products
                </p>

                <h2 className="text-5xl font-bold text-[#184D3B] mb-6">
                  Connecting Trusted International Manufacturers With Canadian Retailers
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  Bethlehem Products Inc. is a Canadian importer and distributor
                  focused on bringing trusted South Indian food brands to retailers,
                  wholesalers, and distributors across Canada.
                </p>

                <p className="text-lg text-gray-600 mb-8">
                  Our mission is to provide high-quality food products backed by
                  reliable supply, professional service, and long-term retailer
                  partnerships.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-[#184D3B] mb-6">
                  Why Work With Us?
                </h3>

                <ul className="space-y-4 text-gray-700">
                  <li>✓ Premium South Indian products</li>
                  <li>✓ Direct manufacturer relationships</li>
                  <li>✓ Wholesale and retail supply</li>
                  <li>✓ Ontario-based support</li>
                  <li>✓ Long-term business partnerships</li>
                  <li>✓ Focus on quality and reliability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold mb-10 text-[#184D3B]">
              Why Retailers Choose Bethlehem Products
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                [
                  "Premium Quality",
                  "Carefully sourced products from trusted manufacturers.",
                ],
                [
                  "Canadian Distribution",
                  "Reliable supply chain serving retailers across Canada.",
                ],
                [
                  "Trusted Partnerships",
                  "Long-term relationships with retailers and distributors.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="p-8 rounded-xl shadow">
                  <h3 className="text-xl font-bold mb-4 text-[#184D3B]">
                    {title}
                  </h3>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="bg-[#184D3B] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
              Retail & Wholesale Partners
            </p>

            <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-5xl">
              Ready to Stock KML Products?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
              Partner with Bethlehem Products Inc. to bring trusted South Indian
              coconut oil products to your customers.
            </p>

            <div className="mt-9 flex justify-center gap-4">
              <a
                href="mailto:sales@bethlehemproducts.ca"
                className="rounded-sm bg-[#C9A84C] px-8 py-4 font-semibold text-white hover:bg-[#D4AF37]"
              >
                Contact Sales
              </a>

              <a
                href="#products"
                className="rounded-sm border border-white/40 px-8 py-4 font-semibold hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                View Products
              </a>
            </div>
          </div>
        </section>
      </main>
<section className="bg-[#123E2F] py-20 text-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Looking For A Reliable Distribution Partner?
    </h2>

    <p className="max-w-2xl mx-auto text-lg text-white/75 mb-8">
      Contact Bethlehem Products Inc. to discuss retail, wholesale,
      and distribution opportunities across Canada.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="mailto:sales@bethlehemproducts.ca"
        className="bg-[#C9A84C] px-8 py-4 rounded font-semibold"
      >
        sales@bethlehemproducts.ca
      </a>

      <a
        href="mailto:info@bethlehemproducts.ca"
        className="border border-white/30 px-8 py-4 rounded"
      >
        info@bethlehemproducts.ca
      </a>

    </div>

  </div>
</section>
      <Footer />
    </>
  );
}