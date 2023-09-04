import { FaWhatsapp } from "react-icons/fa";

const FloatingWButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+254723942482"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full shadow-md animate-bounce flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span>WhatsApp Us</span>
    </a>
  );
};

export default FloatingWButton;
