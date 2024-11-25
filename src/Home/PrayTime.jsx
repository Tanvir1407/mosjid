import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaMosque, FaPrayingHands } from "react-icons/fa";

const PayerTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerSchedule = [
    { name: "Fajr", azan: "3:30 AM", salat: "4:30 AM", icon: <FaMoon style={{ color: "#4B5563" }} /> },
    { name: "Dhuhr", azan: "1:00 PM", salat: "1:15 PM", icon: <FaSun style={{ color: "#FACC15" }} /> },
    { name: "Asr", azan: "5:10 PM", salat: "5:15 PM", icon: <FaCloudSun style={{ color: "#F59E0B" }} /> },
    { name: "Maghrib", azan: "7:00 PM", salat: "7:10 PM", icon: <FaCloudMoon style={{ color: "#FB923C" }} /> },
    { name: "Isha", azan: "8:25 PM", salat: "8:45 PM", icon: <FaPrayingHands style={{ color: "#1D4ED8" }} /> },
    { name: "Jumma", azan: "12:30 PM", salat: "12:45 PM", icon: <FaMosque style={{ color: "#10B981" }} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-14">
      <div className="max-w-7xl mx-auto bg-white shadow rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gray-50 p-8 flex flex-col justify-center">
          {/* Clock */}
          <div className="text-center mb-6">
            <div className="relative mx-auto w-[145px] h-[145px] bg-white border-4 border-btn-color rounded-full shadow-md">
              <div
                className="absolute w-[4px] h-[50px] bg-[#121413] rounded origin-bottom"
                style={{
                  transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`,
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom center",
                  translate: "-50% -100%",
                }}
              ></div>
              <div
                className="absolute w-[2px] h-[65px] bg-[#646464] rounded origin-bottom"
                style={{
                  transform: `rotate(${time.getMinutes() * 6}deg)`,
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom center",
                  translate: "-50% -100%",
                }}
              ></div>
              <div
                className="absolute w-[1px] h-[70px] bg-red-600 rounded origin-bottom"
                style={{
                  transform: `rotate(${time.getSeconds() * 6}deg)`,
                  top: "50%",
                  left: "50%",
                  transformOrigin: "bottom center",
                  translate: "-50% -100%",
                }}
              ></div>
              <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <p className="mt-2 text-gray-700 text-lg font-semibold">{time.toLocaleTimeString()}</p>
          </div>

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
            {prayerSchedule.map((prayer, index) => (
              <React.Fragment key={index}>
                <div className="p-2 bg-gray-50 rounded flex items-center space-x-2">
                  {prayer.icon} <span>{prayer.name}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">{prayer.azan}</div>
                <div className="p-2 bg-gray-50 rounded">{prayer.salat}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerTime;
