import Image from "next/image";

const products = [
  {
    name: "KML Coconut Oil 500mL",
    image: "/images/products/kml-500ml.jpg",
    description: "Premium coconut oil for retail shelves and household use.",
  },
  {
    name: "KML Coconut Oil 1L",
    image: "/images/products/kml-1l.jpg",
    description: "Ideal size for families, grocery stores, and restaurants.",
  },
  {
    name: "KML Coconut Oil 2L",
    image: "/images/products/kml-2l.jpg",
    description: "Larger format for high-volume cooking and food service.",
  },
  {
    name: "Coconut Milk Powder",
    image: "/images/products/coconut-milk-powder.jpg",
    description: "Shelf-stable coconut ingredient for retail and food service.",
  },
  {
    name: "Desiccated Coconut Powder",
    image: "/images/products/desiccated-coconut.jpg",
    description: "Premium coconut powder for bakery, sweets, and food production.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-[#184D3B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            Product Catalog
          </p>
          <h1 className="text-5xl font-bold">
            KML Product Range
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Premium coconut oil and coconut products imported for Canadian retailers,
            wholesalers, and distributors.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="relative h-[340px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#184D3B]">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-gray-600">
                    {product.description}
                  </p>
                  <a
                    href="mailto:sales@bethlehemproducts.ca"
                    className="mt-5 inline-block rounded-sm bg-[#C9A84C] px-5 py-3 font-semibold text-white"
                  >
                    Request Pricing
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}