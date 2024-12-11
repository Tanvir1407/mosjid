/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/Mosque.png";
import nogadQr from "../assets/qr-n.png"; 
import bkashQr from "../assets/qr-b.png";

const NavMenu = ({ routes }) => (
  <ul className="flex">
    {routes.map((route, i) => (
      <li key={i}>
        <a
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          href={route.href}
        >
          {route.name}
        </a>
      </li>
    ))}
  </ul>
);

const AuthNavMenu = ({ onDonateClick }) => (
  <ul className="mb-2 lg:mb-0">
    <li>
      <button
        onClick={onDonateClick}
        className="bg-orange-500 hover:bg-opacity-90 text-white rounded transition py-3 px-8 font-normal mb-6 sm:mb-0 text-base"
      >
        Donate Now
      </button>
    </li>
  </ul>
);

const Modal = ({ isOpen, onClose, selectedMethod, setSelectedMethod }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-96 relative">
        <button
          className="text-red-500 font-bold text-xl absolute top-3 right-3"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-center font-bold text-lg mb-4">Scan to Donate</h2>
        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedMethod === "nogad"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedMethod("nogad")}
          >
            Nogad
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedMethod === "bkash"
                ? "bg-pink-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedMethod("bkash")}
          >
            bKash
          </button>
        </div>
        {selectedMethod === "nogad" && (
          <img src={nogadQr} alt="Nagad QR Code" className="mx-auto w-48 h-48" />
        )}
        {selectedMethod === "bkash" && (
          <img src={bkashQr} alt="bKash QR Code" className="mx-auto w-48 h-48" />
        )}
        {!selectedMethod && (
          <p className="text-center text-gray-500">Please select a payment method</p>
        )}
      </div>
    </div>
  );
};

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleDonateClick = () => {
    setIsModalOpen(true);
    setSelectedMethod(null); // Reset selection each time the modal is opened
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1200px] mx-auto py-5 text-zinc-900">
        <div className="relative">
          <nav>
            <div className="container px-4">
              <div className="flex items-center justify-between">
                <a className="font-black text-3xl min-w-[33%]" href="/">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  className="block lg:hidden cursor-pointer h-10 z-20"
                  type="button"
                  id="hamburger"
                >
                  <div className="h-0.5 w-7 -translate-y-2"></div>
                  <div className="h-0.5 w-7"></div>
                  <div className="h-0.5 w-7 translate-y-2"></div>
                </button>
                <div
                  className="flex flex-col lg:flex-row justify-center lg:justify-end items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
                  id="navbar"
                >
                  <AuthNavMenu onDonateClick={handleDonateClick} />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
    </div>
  );
}
