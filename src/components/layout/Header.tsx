export default function Header() {
  return (
    <header className="bg-[#1B4332] text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">
            Bethlehem Products Inc.
          </h1>
        </div>

        <nav className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Partners</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}