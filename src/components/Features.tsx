import { prisma } from "@/lib/prisma"; // Import dari file yang kita buat tadi

export default async function Features() {
  // Mengambil data dari SQL Database menggunakan instance yang aman
  const features = await prisma.feature.findMany();

  return (
    <section id="fitur" className="w-full min-h-screen relative flex flex-col justify-center items-center py-20 px-[8%] bg-gradient-to-b from-[#fbffee] to-[#e8f5d6] text-center">
       <h2 className="text-[32px] md:text-[42px] font-extrabold mb-[60px] text-[#0a3d4d]">Fitur yang di dapat</h2>

       <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10 lg:gap-[80px] w-full max-w-[1200px]">
           {/* Kartu Harga (Tetap Statis) */}
           <div className="bg-white p-10 rounded-[30px] shadow-[0_20px_40px_rgba(10,61,77,0.1)] text-center w-full max-w-[350px] border border-[#e0e0e0] flex flex-col justify-center">
               <h4 className="text-lg mb-2.5 font-bold">Mulai dari....</h4>
               <div className="text-[64px] font-extrabold text-[#0a3d4d] my-2.5">
                   <span className="text-2xl align-middle">Rp</span> XX<span className="text-2xl align-middle">.xxx</span>
               </div>
               <p className="font-semibold text-[#3d5a64]">Perbulan</p>
               <a href="#" className="inline-flex items-center justify-center bg-gradient-to-r from-[#94cd28] to-[#29a343] text-white py-[15px] px-10 rounded-full font-extrabold text-lg gap-2.5 mt-5 w-full hover:scale-105 transition-transform">
                   Daftar &rarr; 
               </a>
           </div>

           {/* Daftar Fitur (DINAMIS DARI SQL) */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 text-left self-center w-full lg:w-auto mt-10 lg:mt-0">
               {features.map((item) => (
                   <div key={item.id} className="flex items-center gap-[15px] font-semibold text-lg text-[#0a3d4d]">
                       <span className="flex items-center justify-center w-6 h-6 bg-[#0a3d4d] text-white rounded-full text-xs shrink-0">✔</span> 
                       {item.title}
                   </div>
               ))}
           </div>
       </div>
    </section>
  );
}