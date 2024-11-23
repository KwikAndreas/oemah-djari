import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="https://wa.me/6281292698237"
      target="_blank"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default FloatingButton;
