import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot, FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosCall, IoIosMail } from "react-icons/io";

export default function SecondaryHeader() {
  return (
    <div className="bg-black text-xs text-white py-2">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-10">
            <div className="flex gap-1 items-center">
              <IoIosCall  />
              <span >+234 123 456 7890</span>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosMail  />
              <span >abc@gmail.com</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot  />
              <span >123, XYZ Street, Lagos</span>
            </div>
          </div>


          <div className="flex gap-2 text-sm items-center"> 
            <p>Follow:</p>
            <FaFacebookSquare />
            <FaSquareWhatsapp />
            <FaSquareXTwitter/>
          </div>
        </div>
      </div>
    </div>
  );
}
