import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaMosque, FaPrayingHands } from "react-icons/fa";
import apiClient from "../api/api";
import Watch from "./Watch";

const PayerTime = () => {

  //====================API=============================
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/namaz-time?query=all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  //======================API===========================
 

  const getPrayerIcon = (name) => {
    switch (name.toLowerCase()) {
      case "fajr":
        return <FaMoon style={{ color: "#4B5563" }} />;
      case "dhuhr":
        return <FaSun style={{ color: "#FACC15" }} />;
      case "asr":
        return <FaCloudSun style={{ color: "#F59E0B" }} />;
      case "maghrib":
        return <FaCloudMoon style={{ color: "#FB923C" }} />;
      case "isha":
        return <FaPrayingHands style={{ color: "#1D4ED8" }} />;
      case "jummah":
        return <FaMosque style={{ color: "#10B981" }} />;
      default:
        return <FaPrayingHands style={{ color: "#4B5563" }} />;
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <div className="max-w-7xl mx-auto bg-white shadow rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gray-50 p-8 flex flex-col justify-center">
          {/* Clock */}
          <Watch />

          {/* Welcome Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome To Masjid</h2>
            <blockquote className="mt-4 text-gray-600 italic border-l-4 pl-4 border-gray-300">
              &quot;The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound. And if it is corrupt, then the rest of his deeds will be corrupt.&quot; 
              <span className="block mt-2 font-semibold">- Prophet Muhammad (ﷺ)</span>
            </blockquote>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-white">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-gray-700 font-semibold">Name of Salat</div>
            <div className="text-gray-700 font-semibold">Azan Time</div>
            <div className="text-gray-700 font-semibold">Prayer Time</div>
            {data?.map((prayer, index) => (
              <React.Fragment key={index}>
                <div className="p-2 bg-gray-50 rounded flex items-center space-x-2">
                {getPrayerIcon(prayer?.name)} <span>{prayer?.name}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">{prayer?.azan}</div>
                <div className="p-2 bg-gray-50 rounded">{prayer?.time}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerTime;
