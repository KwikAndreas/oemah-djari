import { useState } from "react";
import Product_Category from "../components/card_produk_category";

const Category = () => {
  const kategori = [
    {
      id: 1,
      width: 120,
      height: 120,
      src: "/static/category/mentega.png",
      alt: "Mentega",
      title: "Mentega",
    },
    {
      id: 2,
      width: 120,
      height: 120,
      src: "/static/category/compound.png",
      alt: "Compound",
      title: "Compound",
    },
    {
      id: 3,
      width: 120,
      height: 120,
      src: "/static/category/gula.png",
      alt: "Gula",
      title: "Gula",
    },
    {
      id: 4,
      width: 120,
      height: 120,
      src: "/static/category/mentega.png",
      alt: "Mentega",
      title: "Mentega",
    },
    {
      id: 5,
      width: 120,
      height: 120,
      src: "/static/category/compound.png",
      alt: "Coklat",
      title: "Coklat",
    },
    {
      id: 6,
      width: 120,
      height: 120,
      src: "/static/category/gula.png",
      alt: "Keju",
      title: "Keju",
    },
    {
      id: 7,
      width: 120,
      height: 120,
      src: "/static/category/mentega.png",
      alt: "Mentega",
      title: "Mentega",
    },
    {
      id: 8,
      width: 120,
      height: 120,
      src: "/static/category/compound.png",
      alt: "Compound",
      title: "Compound",
    },
    {
      id: 9,
      width: 120,
      height: 120,
      src: "/static/category/gula.png",
      alt: "Gula",
      title: "Gula",
    },
    {
      id: 10,
      width: 120,
      height: 120,
      src: "/static/category/mentega.png",
      alt: "Pewarna",
      title: "Pewarna",
    },
    {
      id: 11,
      width: 120,
      height: 120,
      src: "/static/category/compound.png",
      alt: "Compound",
      title: "Compound",
    },
    {
      id: 12,
      width: 120,
      height: 120,
      src: "/static/category/gula.png",
      alt: "Tepung",
      title: "Tepung",
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const categoriesPerPage = 6;

  const nextCategory = () => {
    if (currentCategoryIndex + categoriesPerPage < kategori.length) {
      setCurrentCategoryIndex(currentCategoryIndex + categoriesPerPage);
    }
  };

  const previousCategory = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(
        Math.max(0, currentCategoryIndex - categoriesPerPage)
      );
    }
  };

  return (
    <section className="w-full max-w-[840px] mx-auto relative mt-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Kategori Produk</h2>

      <div className="relative">
        <button
          onClick={previousCategory}
          disabled={currentCategoryIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
          bg-yellow-600 text-white px-4 py-2 rounded-r-lg z-10
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:-yellow-500 transition-colors duration-300"
        >
          {"<"}
        </button>

        <button
          onClick={nextCategory}
          disabled={currentCategoryIndex + categoriesPerPage >= kategori.length}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
          bg-yellow-600 text-white px-4 py-2 rounded-l-lg z-10
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-yellow-500 transition-colors duration-300"
        >
          {">"}
        </button>

        <div
          className="grid grid-cols-6 gap-4 
        rounded-lg p-4"
        >
          {kategori
            .slice(
              currentCategoryIndex,
              currentCategoryIndex + categoriesPerPage
            )
            .map((category) => (
              <Product_Category
                key={category.id}
                width={128}
                height={128}
                src={category.src}
                alt={category.alt}
                title={category.title}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
