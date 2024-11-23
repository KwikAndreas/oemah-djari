import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center p-2 bg-yellow-200 text-white">
      <div className="w-2/4 flex items-center justify-between">
        <div className="flex items-center justify-center w-1/3">
          <Image
            src="/static/logo-oemah-djari.png"
            alt="Brand Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col w-2/3 space-y-3">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari produk..."
              className="flex-grow p-2 rounded-l text-black"
            />
            <button className="p-2 bg-yellow-600 rounded-r">Cari</button>
          </div>

          <div className="flex space-x-2">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="p-2 text-gray-600 hover:text-yellow-800"
              >
                Kategori Produk
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 bg-white text-black mt-2 rounded shadow-lg">
                  <ul>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                      Mentega
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                      Compound
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer">
                      Gula
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="p-2  text-gray-800 hover:text-white">FAQ</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
