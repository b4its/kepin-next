import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisiMisi from "@/components/VisiMisi";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VisiMisi />
      {/* Component Features ini bersifat async karena mengambil data DB */}
      <Features />
      <Footer />
    </main>
  );
}