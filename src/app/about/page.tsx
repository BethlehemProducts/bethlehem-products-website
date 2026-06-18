export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#184D3B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            About Us
          </p>

          <h1 className="text-5xl font-bold">
            Canadian Importer & Distributor of South Indian Products
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/75">
            Bethlehem Products Inc. connects Canadian retailers, wholesalers,
            and distributors with trusted South Indian food products, including
            KML coconut oil and coconut-based ingredients.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          {[
            ["Our Focus", "Premium coconut oil and South Indian grocery products."],
            ["Our Market", "Retailers, ethnic grocery stores, wholesalers, and distributors across Canada."],
            ["Our Promise", "Reliable supply, professional communication, and quality-focused sourcing."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl bg-gray-50 p-8 shadow">
              <h2 className="mb-4 text-2xl font-bold text-[#184D3B]">{title}</h2>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}