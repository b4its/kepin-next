import Image from "next/image";
import Link from "next/link";

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="w-full min-h-screen relative flex flex-col justify-center items-center py-20 px-[8%] bg-[#0a3d4d] text-center text-white">
      <h2 className="text-[32px] md:text-[42px] font-extrabold mb-2.5">Visi & Misi Kami</h2>
      <p className="text-base font-semibold max-w-[650px] mx-auto mb-[50px] text-[#d1dadd] leading-[1.6]">
        Kami berkomitmen untuk memajukan bisnis indonesia agar menuju indonesia emas
      </p>

      {/* Container Kartu */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center mb-[50px]">
        
        {/* Kartu 1: Otomatisasi */}
        <div className="bg-white border-4 border-[#23a444] rounded-[25px] p-10 text-[#0a3d4d] text-center transition-transform duration-300 hover:-translate-y-2.5 w-full max-w-[350px] flex flex-col items-center">
          <h4 className="text-2xl font-extrabold mb-[15px]">Otomatisasi</h4>
          <Image 
            src="/images/icon-otomatisasi.png" 
            alt="Otomatisasi" 
            width={100} 
            height={100} 
            className="w-[100px] h-[100px] mb-6 object-contain" 
          />
          <p className="text-sm leading-[1.6] font-semibold text-[#3d5a64]">
            Menyediakan sistem pencatatan keuangan yang real-time, transparan, dan minim kesalahan manusia (human error)
          </p>
        </div>

        {/* Kartu 2: Prediksi */}
        <div className="bg-white border-4 border-[#23a444] rounded-[25px] p-10 text-[#0a3d4d] text-center transition-transform duration-300 hover:-translate-y-2.5 w-full max-w-[350px] flex flex-col items-center">
          <h4 className="text-2xl font-extrabold mb-[15px]">Prediksi</h4>
          <Image 
            src="/images/icon-prediksi.png" 
            alt="Prediksi" 
            width={100} 
            height={100} 
            className="w-[100px] h-[100px] mb-6 object-contain" 
          />
          <p className="text-sm leading-[1.6] font-semibold text-[#3d5a64]">
            Menyediakan sistem pencatatan keuangan yang real-time, transparan, dan minim kesalahan manusia (human error)
          </p>
        </div>

        {/* Kartu 3: Efisiensi */}
        <div className="bg-white border-4 border-[#23a444] rounded-[25px] p-10 text-[#0a3d4d] text-center transition-transform duration-300 hover:-translate-y-2.5 w-full max-w-[350px] flex flex-col items-center">
          <h4 className="text-2xl font-extrabold mb-[15px]">Efisiensi</h4>
          <Image 
            src="/images/icon-efisiensi.png" 
            alt="Efisiensi" 
            width={100} 
            height={100} 
            className="w-[100px] h-[100px] mb-6 object-contain" 
          />
          <p className="text-sm leading-[1.6] font-semibold text-[#3d5a64]">
            Menyediakan sistem pencatatan keuangan yang real-time, transparan, dan minim kesalahan manusia (human error)
          </p>
        </div>

      </div>

      <Link 
        href="#fitur" 
        className="inline-flex items-center gap-2.5 bg-white text-[#0a3d4d] py-3 px-[35px] rounded-full font-extrabold text-sm shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
      >
        &darr; Fitur &darr;
      </Link>
    </section>
  );
}