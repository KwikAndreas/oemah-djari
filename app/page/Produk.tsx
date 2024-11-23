import { useEffect, useState } from "react";
import CardProduk from "../components/card_produk";

const Produk = () => {
  const produk = [
    {
      id: 1,
      width: 96,
      height: 168,
      src: "/static/product/bawang_merah.png",
      alt: "Bawang Merah",
      title: "Bawang Merah",
      desc: "Deskripsi Bawang Merah",
      harga: "Rp 100.000",
      ukuran: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      width: 96,
      height: 168,
      src: "/static/product/bawang_putih.png",
      alt: "Bawang Putih",
      title: "Bawang Putih",
      desc: "Deskripsi Bawang Putih",
      harga: "Rp 200.000",
    },
    {
      id: 3,
      width: 96,
      height: 168,
      src: "/static/product/cabe.png",
      alt: "Cabe",
      title: "Cabe",
      desc: "Deskripsi Cabe",
      harga: "Rp 100.000",
    },
    {
      id: 4,
      width: 96,
      height: 168,
      src: "/static/product/daun_bawang.png",
      alt: "Daun Bawang",
      title: "Daun Bawang",
      desc: "Deskripsi Daun Bawang",
      harga: "Rp 200.000",
    },
    {
      id: 5,
      width: 96,
      height: 168,
      src: "/static/product/wortel.png",
      alt: "Wortel",
      title: "Wortel",
      desc: "Deskripsi Wortel",
      harga: "Rp 100.000",
    },
    {
      id: 6,
      width: 96,
      height: 168,
      src: "/static/product/kentang.png",
      alt: "Kentang",
      title: "Kentang",
      desc: "Deskripsi Kentang",
      harga: "Rp 200.000",
    },
    {
      id: 7,
      width: 96,
      height: 168,
      src: "/static/product/daging_ayam.png",
      alt: "Daging Ayam",
      title: "Daging Ayam",
      desc: "Deskripsi Daging Ayam",
      harga: "Rp 100.000",
    },
    {
      id: 8,
      width: 96,
      height: 168,
      src: "/static/product/daging_sapi.png",
      alt: "Daging Sapi",
      title: "Daging Sapi",
      desc: "Deskripsi Daging Sapi",
      harga: "Rp 200.000",
    },
    {
      id: 9,
      width: 128,
      height: 168,
      src: "/static/product/tahu.png",
      alt: "Tahu",
      title: "Tahu",
      desc: "Deskripsi Tahu",
      harga: "Rp 100.000",
    },
    {
      id: 10,
      width: 168,
      height: 168,
      src: "/static/product/tempe.png",
      alt: "Tempe",
      title: "Tempe",
      desc: "Deskripsi Tempe",
      harga: "Rp 200.000",
    },
    {
      id: 11,
      width: 168,
      height: 168,
      src: "/static/product/tempe.png",
      alt: "Tempe",
      title: "Tempe",
      desc: "Deskripsi Tempe",
      harga: "Rp 100.000",
    },
    {
      id: 12,
      width: 96,
      height: 168,
      src: "/static/product/beras.png",
      alt: "Beras",
      title: "Beras",
      desc: "Deskripsi Beras",
      harga: "Rp 200.000",
    },
    {
      id: 13,
      width: 156,
      height: 168,
      src: "/static/product/mie.png",
      alt: "Mie",
      title: "Mie",
      desc: "Deskripsi Mie",
      harga: "Rp 200.000",
    },
    {
      id: 14,
      width: 96,
      height: 168,
      src: "/static/product/roti.png",
      alt: "Roti",
      title: "Roti",
      desc: "Deskripsi Roti",
      harga: "Rp 200.000",
    },
    {
      id: 15,
      width: 96,
      height: 168,
      src: "/static/product/garam.png",
      alt: "Garam",
      title: "Garam",
      desc: "Deskripsi Garam",
      harga: "Rp 200.000",
    },
    {
      id: 16,
      width: 96,
      height: 168,
      src: "/static/product/gula.png",
      alt: "Gula",
      title: "Gula",
      desc: "Deskripsi Gula",
      harga: "Rp 200.000",
    },
    {
      id: 17,
      width: 128,
      height: 168,
      src: "/static/product/kecap_manis.png",
      alt: "Kecap Manis",
      title: "Kecap Manis",
      desc: "Deskripsi Kecap Manis",
      harga: "Rp 200.000",
    },
    {
      id: 18,
      width: 96,
      height: 168,
      src: "/static/product/kecap_asin.png",
      alt: "Kecap Asin",
      title: "Kecap Asin",
      desc: "Deskripsi Kecap Asin",
      harga: "Rp 200.000",
    },
    {
      id: 19,
      width: 84,
      height: 168,
      src: "/static/product/saus_tiram.png",
      alt: "Saus Tiram",
      title: "Saus Tiram",
      desc: "Deskripsi Saus Tiram",
      harga: "Rp 200.000",
    },
    {
      id: 20,
      width: 128,
      height: 168,
      src: "/static/product/minyak.png",
      alt: "Minyak Goreng",
      title: "Minyak Goreng",
      desc: "Deskripsi Minyak Goreng",
      harga: "Rp 200.000",
    },
    {
      id: 21,
      width: 96,
      height: 168,
      src: "/static/product/santan.png",
      alt: "Santan",
      title: "Santan",
      desc: "Deskripsi Santan",
      harga: "Rp 200.000",
    },
    {
      id: 22,
      width: 96,
      height: 168,
      src: "/static/product/tepung_terigu.png",
      alt: "Tepung Terigu",
      title: "Tepung Terigu",
      desc: "Deskripsi Tepung Terigu",
      harga: "Rp 200.000",
    },
    {
      id: 23,
      width: 96,
      height: 168,
      src: "/static/product/keju.png",
      alt: "Keju",
      title: "Keju",
      desc: "Deskripsi Keju",
      harga: "Rp 200.000",
    },
    {
      id: 24,
      width: 96,
      height: 168,
      src: "/static/product/susu_cair.png",
      alt: "Susu Cair",
      title: "Susu Cair",
      desc: "Deskripsi Susu Cair",
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

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
