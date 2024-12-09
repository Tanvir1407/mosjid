import { useState, useEffect } from "react";
import apiClient from "../api/api";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch announcements from the API
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await apiClient.get("/announcement?query=all");
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [announcements]);

  if (announcements.length === 0) {
    return <div className="text-center py-12">Loading announcements...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Latest Announcements
        </h2>
        <div className="relative">
          <div className="max-w-4xl mx-auto overflow-hidden">
            {/* Slider Container */}
            <div
              className="flex transition-transform duration-700"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="min-w-full px-6 py-8 bg-white shadow-xl rounded-lg border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{announcement.description}</p>
                  <p className="text-gray-500 mt-6 text-sm">{announcement.date}</p>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {announcements.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-gray-800"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-3 px-[16px] rounded-full shadow hover:bg-gray-700 focus:outline-none z-10"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
              )
            }
          >
            &#8592;
          </button>
          <button
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-3 px-[16px] rounded-full shadow hover:bg-gray-700 focus:outline-none z-10"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
              )
            }
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
