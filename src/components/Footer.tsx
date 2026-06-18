export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bethlehem Products Inc.
            </h3>

            <p className="text-gray-400">
              Importing and distributing premium South Indian products
              across Canada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Products
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>KML Coconut Oil 500mL</li>
              <li>KML Coconut Oil 1L</li>
              <li>KML Coconut Oil 2L</li>
              <li>Coconut Milk Powder</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>Ontario, Canada</li>
              <li>226-505-6505</li>
              <li>sales@bethlehemproducts.ca</li>
              <li>bethlehemproducts.ca</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 Bethlehem Products Inc. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}