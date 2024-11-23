import React from "react";
import Image from "next/image";

interface category_props {
  width: 128;
  height: 128;
  src: string;
  alt: string;
  title: string;
}

const Product_Category: React.FC<category_props> = ({
  width,
  height,
  src,
  alt,
  title,
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer w-[120px] h-[120px] p-2">
      <div className="relative w-16 h-16 mb-2">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3
        className="text-sm font-medium text-center text-gray-700 
      line-clamp-2 hover:text-green-500"
      >
        {title}
      </h3>
    </div>
  );
};

export default Product_Category;
