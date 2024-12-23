import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Updated import
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fazar from "../assets/images/fazar.webp";
import zohor from "../assets/images/zohor.webp";
import asar from "../assets/images/asar.webp";
import magrib from "../assets/images/magrib.webp";
import esha from "../assets/images/esha.webp";

const Features = ({ data }) => {
  const slides = [
    {
      src: fazar,
      alt: "Serene Mountains",
      caption: "Fajr",
      time: data?.find((item) => item.name === "FAJR")?.time,
      message: "Whoever prays Fajr is under the protection of Allah. (Muslim)",
    },
    {
      src: zohor,
      alt: "Majestic Peaks",
      caption: "Dhuhr",
      time: data?.find((item) => item.name === "DHUHR")?.time,
      message: "The most beloved deed to Allah is prayer at its proper time. (Bukhari & Muslim)",
    },
    {
      src: asar,
      alt: "Lush Forests",
      caption: "Asr",
      time: data?.find((item) => item.name === "ASR")?.time,
      message: "He who misses Asr prayer intentionally, his deeds will be null and void. (Bukhari)",
    },
    {
      src: magrib,
      alt: "Lush Forests",
      caption: "Maghrib",
      time: data?.find((item) => item.name === "MAGRIB")?.time,
      message: "The Prophet would hasten to pray Maghrib before the stars appeared. (Muslim)",
    },
    {
      src: esha,
      alt: "Lush Forests",
      caption: "Isha",
      time: data?.find((item) => item.name === "ISHA")?.time,
      message: "Whoever prays Isha in congregation, it is as if he prayed half the night. (Muslim)",
    },
  ];

  return (
    <div className="w-full h-[calc(100vh-110px)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Use modules here
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full w-full">
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-10 z-20">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {`${slide.caption} : ${slide?.time ? slide.time : "00:00"}`}
                </h2>
                <div className="mt-2 sm:mt-4">
                  <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    {slide?.message}
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;
