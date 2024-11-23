import React from "react";
import Image from "next/image";

interface ProdukDetailProps {
  id: string;
  width: number;
  height: number;
  src: string;
  alt: string;
  title: string;
  desc: string;
  harga: string;
  ukuran?: string[];
}

const CardProdukDetail: React.FC<ProdukDetailProps> = ({
  id,
  width,
  height,
  src,
  alt,
  title,
  desc,
  harga,
  ukuran = [],
}) => {
  return (
    <>
      <input type="checkbox" id={`produk-${id}`} className="hidden peer" />
      <label
        htmlFor={`produk-${id}`}
        className="hidden peer-checked:block fixed inset-0 z-40 bg-black bg-opacity-50 cursor-pointer"
      />

      <div className="hidden peer-checked:block fixed inset-0 z-50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] bg-white rounded-lg flex shadow-2xl relative">
          <label
            htmlFor={`produk-${id}`}
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500 cursor-pointer z-60"
          >
            &times;
          </label>

          <div className="w-1/2 p-8 flex items-center justify-center bg-white">
            <Image
              src={src}
              alt={alt}
              width={width * 6}
              height={height * 6}
              className="object-contain max-h-full max-w-full"
            />
          </div>

          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>

            <p className="text-lg text-gray-600 mb-6">{desc}</p>

            <div className="mb-6">
              <p className="text-2xl font-semibold text-green-600 mb-2">
                {harga}
              </p>
              {/* <p className="text-sm text-gray-500">
                Harga sudah termasuk pajak
              </p> */}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                Ukuran Tersedia:
              </h3>
              <div className="flex space-x-2">
                {ukuran.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 border rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                Tambah ke Keranjang
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProdukDetail;
