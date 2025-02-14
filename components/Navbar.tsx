import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-violet-700 p-4">
      <div className="container mx-auto flex justify-start items-center">
        <Link href="/" className="text-white text-2xl text-violet-500 font-bold">
          My Utilities
        </Link>
        <div className="flex ml-4 space-x-6">
          <Link href="/" className="text-white hover:text-violet-300">
            Ferramentas
          </Link>
          {/* <Link href="/about" className="text-white hover:text-violet-300">
            Why Us?
          </Link>
          <Link href="/contact" className="text-white hover:text-violet-300">
            Contato
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;