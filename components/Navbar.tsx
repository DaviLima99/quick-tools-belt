import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex justify-start items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          My Utilities
        </Link>
        <div className="flex ml-4 space-x-6">
          <Link href="/home" className="text-white hover:text-gray-300">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            Why Us?
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;