import Image from "next/image";

export default function DashboardNavbar() {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-4 lg:px-8 relative z-20 bg-white/60 backdrop-blur-lg border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] sticky top-0 transition-all">
       
       {/* Logo Kiri */}
       <div className="flex items-center">
           <Image 
             src="/images/logo.png" 
             alt="Ke-Pin Logo" 
             width={120} 
             height={40} 
             className="h-10 w-auto object-contain drop-shadow-sm" 
           />
       </div>

       {/* Kolom Pencarian Tengah */}
       <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-focus-within:text-[#29a343] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
           </div>
           {/* Input search bergaya modern */}
           <input 
               type="text" 
               placeholder="Cari file atau laporan..." 
               className="w-full bg-white/50 backdrop-blur-sm border border-white/60 text-gray-700 rounded-full py-2.5 pl-12 pr-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] focus:outline-none focus:ring-2 focus:ring-[#29a343]/50 focus:bg-white transition-all font-medium placeholder:text-gray-400"
           />
       </div>

       {/* Profil Kanan */}
       <div className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-1.5 rounded-full transition-colors">
           <div className="hidden sm:block text-right">
               <p className="text-[13px] font-semibold text-gray-500 leading-tight">Selamat datang,</p>
               <p className="text-sm font-bold text-[#0a3d4d] leading-tight">Emailku@gmail.com</p>
           </div>
           {/* Ikon Avatar */}
           <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#29a343] to-[#94cd28] flex items-center justify-center text-white shrink-0 shadow-md border-2 border-white">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                   <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
               </svg>
           </div>
       </div>
   </header>
  );
}