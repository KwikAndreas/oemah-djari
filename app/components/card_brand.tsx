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
      flex 
      items-center 
      justify-center 
      bg-white 
      rounded-lg 
      shadow-md 
      p-4 
      overflow-hidden 
      w-full 
      max-w-[120px] 
      sm:max-w-[140px] 
      md:max-w-[156px] 
      h-auto
    "
    >
      <div
        className="
        relative 
        w-20 
        h-20 
        sm:w-24 
        sm:h-24 
        md:w-28 
        md:h-28 
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
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Card_Brand;
