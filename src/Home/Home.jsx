import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "./Features";
import PrayTime from "./PrayTime";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
        <Header/>
        <Features/>
        <PrayTime/>
        <Footer/>
    </div>
  )
}
