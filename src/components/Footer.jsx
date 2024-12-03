import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Mosque-dark.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-[1200px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <a className="font-black text-3xl min-w-[33%]" href="/">
                <img src={logo} />
              </a>
            <p className="text-sm mt-3">
              YourBrand is dedicated to providing the best services and products
              for our customers. Stay connected with us for the latest updates.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:underline text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Get in Touch</h2>
            <p className="text-sm">Email: contact@yourbrand.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 YourBrand. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
