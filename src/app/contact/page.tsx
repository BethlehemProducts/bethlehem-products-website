export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#184D3B] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A84C]">
            Contact
          </p>

          <h1 className="text-5xl font-bold">
            Contact Bethlehem Products Inc.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Interested in wholesale pricing, retail partnerships, or product
            availability? Contact our sales team.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl bg-white p-10 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-[#184D3B]">
              Sales & Partnership Inquiries
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a className="text-[#184D3B]" href="mailto:sales@bethlehemproducts.ca">
                  sales@bethlehemproducts.ca
                </a>
              </p>
              <p><strong>Location:</strong> Ontario, Canada</p>
              <p><strong>Business:</strong> Importing, distribution, and wholesale supply</p>
            </div>

            <a
              href="mailto:sales@bethlehemproducts.ca"
              className="mt-8 inline-block rounded-sm bg-[#C9A84C] px-7 py-4 font-semibold text-white"
            >
              Email Sales Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}