import React from "react";
import Image from "next/image";
import CardProdukDetail from "./CardProdukDetail";

interface produk_props {
  id: string;
  width: number;
  height: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  harga: string;
  stok: string;
  ukuran?: string[];
}

const CardProduk: React.FC<produk_props> = ({
  id,
  width,
  height,
  src,
  alt,
  title,
  desc,
  harga,
  stok,
  ukuran = [],
}) => {
  return (
    <div className="relative">
      <input type="checkbox" id={`produk-${id}`} className="hidden peer" />

      <label
        htmlFor={`produk-${id}`}
        className="block w-full max-w-sm md:max-w-xs lg:max-w-sm h-auto border rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-500 hover:scale-105 cursor-pointer"
      >
        <div className="h-48 w-full bg-white flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="object-contain max-h-full max-w-full"
          />
        </div>

        <div className="p-4 flex flex-col justify-between h-auto">
          <div>
            <h2 className="text-lg font-bold text-gray-900 hover:text-yellow-600">
              {title}
            </h2>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <p className="text-xl font-semibold text-gray-700">{harga}</p>
              <p className="text-lg text-green-500">{stok}</p>
            </div>
            <span className="mt-2 text-blue-500">Lihat Detail</span>
          </div>
        </div>
      </label>

      <CardProdukDetail
        id={id}
        width={width}
        height={height}
        src={src}
        alt={alt}
        title={title}
        desc={desc}
        harga={harga}
        stok={stok}
        ukuran={ukuran}
      />
    </div>
  );
};

export default CardProduk;
