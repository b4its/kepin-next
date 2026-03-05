"use client";

import { useState, useRef, useTransition } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { uploadTransactionFile } from "@/app/actions/upload"; // Import Server Action tadi

export default function Dashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [isPending, startTransition] = useTransition(); // Untuk status Loading
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fungsi saat file ditarik masuk
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  // Fungsi saat file dilepaskan (Drop)
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // Fungsi saat input file diklik manual
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  // --- LOGIKA UTAMA: Kirim ke Server Action ---
  const processFile = (file: File) => {
    // Cek ekstensi manual di frontend untuk UX
    const allowedExtensions = /(\.xls|\.xlsx|\.csv)$/i;
    if (!allowedExtensions.exec(file.name)) {
      alert("Hanya file Excel (.xlsx, .xls) atau CSV yang diperbolehkan!");
      return;
    }

    // Bungkus dalam FormData
    const formData = new FormData();
    formData.append("file", file);

    // Jalankan Server Action
    startTransition(async () => {
      try {
        await uploadTransactionFile(formData);
        // Jika sukses, dia akan otomatis redirect (sesuai kode di actions/upload.ts)
      } catch (error: any) {
        console.error(error);
        alert("Gagal upload: " + error.message);
      }
    });
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="text-[#0a3d4d] min-h-screen flex flex-col bg-gradient-to-br from-[#e8f7ec] via-[#f2fdf5] to-[#d1f5de] relative overflow-x-hidden">
      
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#94cd28]/20 rounded-full blur-[80px] animate-float pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#29a343]/15 rounded-full blur-[100px] animate-float-delayed pointer-events-none z-0"></div>

      <DashboardNavbar />

      <main className="flex-1 flex flex-col items-center justify-center p-4 lg:p-8 w-full relative z-10 min-h-[calc(100vh-80px)]">
        
        <div className="w-full max-w-5xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#0a3d4d] tracking-tight">
                    Upload File <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29a343] to-[#94cd28]">Keuangan Anda</span>
                </h1>
                <p className="text-[#3d5a64] font-medium text-lg">
                    Format: .xlsx, .xls, .csv
                </p>
            </div>

            <div 
                className={`
                  w-full h-[320px] rounded-[2rem] border-4 border-dashed transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group relative z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]
                  ${isDragging 
                    ? "bg-white/80 border-[#29a343] scale-[1.02]" 
                    : "border-[#29a343]/40 bg-white/30 hover:bg-white/60 hover:border-[#29a343]/70"
                  }
                  ${isPending ? "opacity-50 cursor-wait pointer-events-none" : ""} 
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={onButtonClick}
            >
                <input 
                  type="file" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleChange} 
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                />

                {/* TAMPILAN SAAT LOADING */}
                {isPending ? (
                   <div className="flex flex-col items-center animate-pulse">
                      <div className="w-12 h-12 border-4 border-[#29a343] border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="font-bold text-[#0a3d4d]">Sedang Memproses Data...</p>
                   </div>
                ) : (
                  <>
                    <div className="bg-gradient-to-r from-[#94cd28] to-[#29a343] text-white rounded-2xl py-4 px-8 font-bold text-xl md:text-2xl flex items-center gap-3 mb-6 shadow-[0_8px_20px_rgba(41,163,67,0.3)] group-hover:-translate-y-1 group-hover:shadow-[0_12px_25px_rgba(41,163,67,0.4)] transition-all duration-300">
                        <div className="bg-white rounded-full p-1 text-[#29a343] shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        Upload File
                    </div>
                    <p className="text-[#3d5a64] font-medium text-sm md:text-base text-center px-4">
                        <span className="font-bold text-[#0a3d4d]">Drag and drop</span> File kesini atau klik tombol <span className="font-bold text-[#0a3d4d]">Upload file</span>
                    </p>
                  </>
                )}

            </div>
        </div>

      </main>
    </div>
  );
}