import { useEffect, useState } from "react";
import CardProduk from "../components/card_produk";

const Produk = () => {
  const produk = [
    {
      id: 1,
      width: 96,
      height: 168,
      src: "/static/product/arum_co.jpeg",
      alt: "Arum Co",
      title: "Arum Co",
      desc: "Deskripsi Arum Co",
      harga: "Rp 100.000",
      ukuran: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      width: 96,
      height: 168,
      src: "/static/product/cakra_kembar.jpeg",
      alt: "Cakra Kembar",
      title: "Cakra Kembar",
      desc: "Deskripsi Cakra Kembar",
      harga: "Rp 200.000",
    },
    {
      id: 3,
      width: 96,
      height: 168,
      src: "/static/product/choco_chips.png",
      alt: "Choco chips",
      title: "Choco chips",
      desc: "Deskripsi Choco chips",
      harga: "Rp 100.000",
    },
    {
      id: 4,
      width: 96,
      height: 168,
      src: "/static/product/d_choco.png",
      alt: "Dark Compound Chocolate",
      title: "Dark Compound Chocolate",
      desc: "Deskripsi Compound Chocolate",
      harga: "Rp 200.000",
    },
    {
      id: 5,
      width: 96,
      height: 168,
      src: "/static/product/d_core.png",
      alt: "d'core",
      title: "d'core",
      desc: "Deskripsi d'core",
      harga: "Rp 100.000",
    },
    {
      id: 6,
      width: 96,
      height: 168,
      src: "/static/product/del_monte.jpeg",
      alt: "Del Monte",
      title: "Del Monte",
      desc: "Deskripsi Del Monte",
      harga: "Rp 200.000",
    },
    {
      id: 7,
      width: 96,
      height: 168,
      src: "/static/product/royal_palmia.jpeg",
      alt: "Royal Palmia",
      title: "Royal Palmia",
      desc: "Deskripsi Royal Palmia",
      harga: "Rp 100.000",
    },
    {
      id: 8,
      width: 96,
      height: 168,
      src: "/static/product/morin.jpeg",
      alt: "Product 8",
      title: "Produk 8",
      desc: "Deskripsi Produk 8",
      harga: "Rp 200.000",
    },
    {
      id: 9,
      width: 96,
      height: 168,
      src: "/static/product/sasa.jpeg",
      alt: "Sasa",
      title: "Sasa",
      desc: "Deskripsi Sasa",
      harga: "Rp 100.000",
    },
    {
      id: 10,
      width: 96,
      height: 168,
      src: "/static/product/d_core.png",
      alt: "Product 10",
      title: "Produk 10",
      desc: "Deskripsi Produk 10",
      harga: "Rp 200.000",
    },
    {
      id: 11,
      width: 96,
      height: 168,
      src: "/static/product/segitiga_biru.jpeg",
      alt: "Segitiga Biru",
      title: "Segitiga biru",
      desc: "Deskripsi Segitiga Biru",
      harga: "Rp 100.000",
    },
    {
      id: 12,
      width: 96,
      height: 168,
      src: "/static/product/win_cheez.png",
      alt: "Win Cheez",
      title: "Win Cheez",
      desc: "Deskripsi Win Cheez",
      harga: "Rp 200.000",
    },
    {
        id: 13,
        width: 96,
        height: 168,
        src: "/static/product/teh_cap.jpeg",
        alt: "Teh Cap",
        title: "Teh Cap",
        desc: "Deskripsi Teh Cap",
        harga: "Rp 200.000",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const nextProduct = () => {
    if (currentIndex + itemsPerPage < produk.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const previousProduct = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6); 
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="produk" className="relative mt-6">
      <div className="w-full max-w-[840px] mx-auto relative">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Produk</h1>

        <div className="relative">
          <button
            onClick={previousProduct}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 
            bg-yellow-600 text-white px-4 py-2 rounded-r-lg z-10
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-yellow-500 transition-colors duration-300"
          >
            {"<"}
          </button>

          <button
            onClick={nextProduct}
            disabled={currentIndex + itemsPerPage >= produk.length}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 
            bg-yellow-600 text-white px-4 py-2 rounded-l-lg z-10
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-yellow-500 transition-colors duration-300"
          >
            {">"}
          </button>

          <div
            className="grid grid-cols-3 grid-rows-2 gap-4 
        rounded-lg p-4"
          >
            {produk
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((item) => (
                <CardProduk
                  key={item.id}
                  id={`produk-${item.id}`}
                  width={item.width}
                  height={item.height}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  desc={item.desc}
                  harga={item.harga}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
