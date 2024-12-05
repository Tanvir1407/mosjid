import { useEffect, useState } from "react";

export default function Watch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-6">
      <div className="relative mx-auto w-[145px] h-[145px] bg-white border-4 border-btn-color rounded-full shadow-md">
        <div
          className="absolute w-[4px] h-[50px] bg-[#121413] rounded origin-bottom"
          style={{
            transform: `rotate(${
              (time.getHours() % 12) * 30 + time.getMinutes() * 0.5
            }deg)`,
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
      <p className="mt-2 text-gray-700 text-lg font-semibold">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
