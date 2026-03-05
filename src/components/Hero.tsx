import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="beranda" className="relative w-full min-h-[calc(100vh-80px)] flex items-center px-[8%] py-16 lg:py-0 justify-center lg:justify-start text-center lg:text-left">
      <div className="relative z-10 max-w-[850px] mb-12 lg:mb-0">
        <h3 className="text-2xl font-semibold mb-2.5 text-[#023A4B]">Keuangan Pintar</h3>
        <h1 className="text-5xl xl:text-[64px] font-extrabold leading-[1.2] mb-6 whitespace-normal xl:whitespace-nowrap text-[#023A4B]">
          Mengatur keuangan <br />
          <span className="text-[#18983C]">Menggunakan AI</span>
        </h1>
        <p className="text-lg leading-[1.6] max-w-[700px] mx-auto lg:mx-0 mb-10 font-semibold text-[#3d5a64]">
          Dengan kemampuan AI ( artificial intelligence ) anda mampu mengembangkan bisnis anda dengan sesuai tujuan
        </p>

        <Link 
          href="#fitur" 
          className="inline-flex items-center bg-gradient-to-r from-[#94cd28] to-[#29a343] text-white py-[15px] px-10 rounded-full font-extrabold text-lg gap-3 shadow-[0_8px_20px_rgba(41,163,67,0.3)] hover:scale-105 transition-transform"
        >
          Mulai &rarr;
        </Link>
      </div>

      {/* Gambar Ilustrasi Hero */}
      <div className="absolute right-[-10%] lg:right-[0.1%] top-1/2 -translate-y-1/2 w-[120%] lg:w-[60%] opacity-20 lg:opacity-100 z-[1] pointer-events-none">
        <Image 
          src="/images/hero-image.png" 
          alt="Background Illustrasi" 
          width={800} 
          height={600}
          className="w-full h-auto object-contain"
          priority // Tambahkan priority agar gambar ini dimuat duluan
        />
      </div>

      {/* Tombol Scroll Down */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-20">
        <Link 
          href="#visi-misi" 
          className="bg-gradient-to-r from-[#94cd28] to-[#29a343] text-white py-3 px-[30px] rounded-full font-semibold flex items-center gap-2.5 text-[15px] hover:-translate-y-1 transition-transform"
        >
          &darr; Visi & Misi &darr;
        </Link>
      </div>
    </section>
  );
}