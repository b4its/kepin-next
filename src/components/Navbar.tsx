import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white py-[15px] px-[8%] flex justify-between items-center shadow-[0_20px_25px_rgba(0,0,0,0.15)] sticky top-0 z-[100]">
      <div className="logo-container">
        {/* Pastikan file logo ada di public/images/logo.png */}
        <Image 
          src="/images/logo.png" 
          alt="Ke-Pin Logo" 
          width={150} // Sesuaikan lebar asli gambar
          height={50} // Sesuaikan tinggi asli gambar
          className="h-12 w-auto block" 
        />
      </div>

      <nav className="hidden lg:block">
        <ul className="flex list-none gap-10">
          <li>
            <Link href="#beranda" className="no-underline text-[#0a3d4d] font-semibold text-base hover:text-[#29a343] transition-colors">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="#visi-misi" className="no-underline text-[#0a3d4d] font-semibold text-base hover:text-[#29a343] transition-colors">
              Visi & Misi
            </Link>
          </li>
          <li>
            <Link href="#fitur" className="no-underline text-[#0a3d4d] font-semibold text-base hover:text-[#29a343] transition-colors">
              Fitur
            </Link>
          </li>
        </ul>
      </nav>

      <Link 
        href="/auth" 
        className="hidden lg:inline-flex bg-gradient-to-r from-[#94cd28] to-[#29a343] text-white py-3 px-10 rounded-full font-extrabold text-lg hover:shadow-lg transition-shadow"
      >
        Login
      </Link>
    </header>
  );
}