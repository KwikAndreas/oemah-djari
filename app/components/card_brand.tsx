import React from "react";
import Image from "next/image";

interface brand_props {
  src: string;
  alt?: string;
}

const Card_Brand: React.FC<brand_props> = ({ src, alt }) => {
  return (
    <div
      className="
      w-[156px] 
      h-[156px] 
      flex 
      items-center 
      justify-center 
      bg-white 
      rounded-lg 
      shadow-md 
      p-4 
      overflow-hidden
    "
    >
      <div
        className="
        relative 
        w-full 
        h-full 
        transition-transform 
        duration-300 
        ease-in-out 
        hover:scale-105
      "
      >
        <Image
          src={src}
          alt={alt || "Brand Logo"}
          fill
          className="
            object-contain 
            cursor-pointer
          "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Card_Brand;
