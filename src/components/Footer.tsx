export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Bethlehem Products Inc.
            </h3>

            <p className="text-[#C9A84C] font-medium mb-4">
              Delivering Quality. Building Trust.
            </p>

            <p className="text-gray-400">
              Ontario-based importer and distributor connecting trusted
              international manufacturers with Canadian retailers, wholesalers,
              and food service businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-[#C9A84C]">Home</a></li>
              <li><a href="/about" className="hover:text-[#C9A84C]">About Us</a></li>
              <li><a href="/products" className="hover:text-[#C9A84C]">Products</a></li>
              <li><a href="#partners" className="hover:text-[#C9A84C]">Retail Partners</a></li>
              <li><a href="/contact" className="hover:text-[#C9A84C]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Launch Products</h4>

            <ul className="space-y-2 text-gray-400">
              <li>KML Coconut Oil 500 mL</li>
              <li>KML Coconut Oil 1 L</li>
              <li>KML Coconut Oil 2 L</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-gray-400">
              <li>Ontario, Canada</li>
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
