import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card_Brand from "../components/card_brand";

const Brand = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const brands = [
    {
      id: 1,
      src: "/static/logo_cozy.png",
      alt: "Arum Co",
    },
    {
      id: 2,
      src: "/static/logo_cozy.png",
      alt: "Cakra Kembar",
    },
    {
      id: 3,
      src: "/static/logo_cozy.png",
      alt: "Choco chips",
    },
    {
      id: 4,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 5,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 6,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 7,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 8,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 9,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
    {
      id: 10,
      src: "/static/logo_cozy.png",
      alt: "Dark Compound Chocolate",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => {
      return prevPage > 0 ? prevPage - 1 : 0;
    });
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => {
      return prevPage < totalPages - 1 ? prevPage + 1 : totalPages - 1;
    });
  };

  const displayedBrands = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="w-full max-w-[840px] mx-auto relative group/brands">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Official Brands</h2>
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className="
            bg-white 
            border 
            rounded-full 
            p-2 
            disabled:opacity-50
            hover:bg-gray-100
            transition-all
            duration-300
            disabled:cursor-not-allowed
          "
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="Previous"
              width={20}
              height={20}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="
            bg-white 
            border 
            rounded-full 
            p-2 
            disabled:opacity-50
            hover:bg-gray-100
            transition-all
            duration-300
            disabled:cursor-not-allowed
          "
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="Next"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-5 
          gap-4 
          transition-all 
          duration-500 
          ease-in-out
        "
        >
          {displayedBrands.map((brand) => (
            <div
              key={brand.id}
              className="
              w-full 
              transition-all 
              duration-500 
              ease-in-out
            "
            >
              <Card_Brand src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`
              w-2 h-2 rounded-full 
              transition-all
              duration-300
              ${currentPage === index ? "bg-primary w-4" : "bg-gray-300"}
            `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
