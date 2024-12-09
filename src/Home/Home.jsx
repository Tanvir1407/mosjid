import Footer from "../components/Footer";
import Header from "../components/Header";
import Report from "../components/Report/Index";
import Announcement from "./Announcement";
import Features from "./Features";
import PrayTime from "./PrayTime";

export default function Home() {
  return (
  <>
        <Header/>
    <div className="max-w-[1200px] mx-auto">
        <Features/>
        <Report/>
        <PrayTime/>
        <Announcement />
    </div>
        <Footer/>
  </>
  )
}
