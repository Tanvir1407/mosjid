import background from "../assets/features.png";
export default function Features() {
  return (
    <div className="m-10">
      <section
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          width: "100%",
          borderRadius: "20px",
        }}
        className="py-14 md:py-20  relative overflow-hidden"
      >
       
        <div className="container px-14 mx-auto relative ">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
            <div className="w-full md:w-1/2 xl:pr-12 text-center lg:text-start my-12 text-white">
              <h2 className="text-2xl leading-none md:text-[40px] font-bold mb-6">
                In The Name Of Allah, <br /> The Creator Of The Universe
              </h2>
              <p className="text-lg md:text-[16px] leading-normal opacity-80">
              &quot;The first deed for which a person will be brought to account on the Day of Resurrection will be his Salah. If it is good, then he will have succeeded and prospered, but if it is bad, then he will have failed and lost.&quot;
              — [Sunan al-Tirmidhi, 413]
              </p>
              <div className="mt-12">
                <span
                  className="bg-orange-500 hover:bg-opacity-90 text-white  rounded transition py-3 px-8 font-normal mb-6 sm:mb-0 text-base"
                >
                  Donate Now
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
