import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Report from "../components/Report/Index";
import Announcement from "./Announcement";
import Features from "./Features";
import PrayTime from "./PrayTime";
import apiClient from "../api/api";

export default function Home() {
  
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
   
  
  return (
  <>
        <Header/>
    <div className="max-w-[1200px] mx-auto">
        <Features data={data}/>
        <Report/>
        <PrayTime data={data}/>
        <Announcement />
    </div>
        <Footer/>
  </>
  )
}
