"use client";
import Navbar from "./components/Navbar";
import Brand from "./page/Brand";
import Category from "./page/Category";
import Produk from "./page/Produk";
import Footer from "./components/Footer";
import FloatingButton from "./components/tombol_wa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <Brand />
        <Category />
        <Produk />
        <div>
          <a></a>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}
