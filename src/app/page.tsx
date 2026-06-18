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

  <section id="products" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-5xl font-bold mb-12 text-[#184D3B]">
        Featured Products
      </h2>

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

              <p className="text-gray-600">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>

  <section className="py-24 bg-white text-gray-900">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-5xl font-bold mb-10 text-[#184D3B]">
              Why Retailers Choose Bethlehem Products
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 text-[#184D3B]">
                  Premium Quality
                </h3>

                <p className="text-gray-700">
                  Carefully sourced products from trusted manufacturers.
                </p>
              </div>

              <div className="p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 text-[#184D3B]">
                  Canadian Distribution
                </h3>

                <p>
                  Reliable supply chain serving retailers across Canada.
                </p>
              </div>

              <div className="p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-4 text-[#184D3B]">
                  Trusted Partnerships
                </h3>

                <p>
                  Long-term relationships with retailers and distributors.
                </p>
              </div>

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
      coconut oil and specialty food products to your customers.
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

      <Footer />
    </>
  );
}