import React from "react";
import Image from "next/image";

interface category_props {
  src: string;
  alt: string;
  title: string;
}

const Product_Category: React.FC<category_props> = ({ src, alt, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer p-4 w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <h3
        className="text-sm font-medium text-center text-gray-700 line-clamp-2 hover:text-yellow-500"
      >
        {title}
      </h3>
    </div>
  );
};

export default Product_Category;
