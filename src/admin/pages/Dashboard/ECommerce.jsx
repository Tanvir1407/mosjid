import { useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartTwo from '../../components/Charts/ChartTwo';
import apiClient from '../../../api/api';
import { BiDonateHeart } from 'react-icons/bi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiTakeMyMoney } from 'react-icons/gi';

const ECommerce= () => {
  
  //====================API=============================
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/dashboard?query=monthly");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //======================API===========================

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Donation" total={data?.totalDonation} rate="0.43%" levelUp>
          <BiDonateHeart className='text-blue-500' />
        </CardDataStats>
        <CardDataStats title="Total Expense" total={data?.totalExpense} rate="0.21%" levelUp>
          {/* icon here */}
          <FaMoneyBillTrendUp className='text-blue-500'/>
        </CardDataStats>
        <CardDataStats title="Last Week Jummah Collection" total={data?.lastWeekJummahCollection} rate="0.11%" levelUp>
          {/* icon here */}
          <GiTakeMyMoney className='text-blue-500'/>
        </CardDataStats>
        <CardDataStats title="Last Week Magrib Collection" total={data?.lastWeekMagribCollection} rate="0.31%" levelDown>
          {/* icon here */}
          <GiTakeMyMoney className='text-blue-500'/>
        </CardDataStats>
        
      </div>

      {data && <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne data={data?.reportData}/>
        <ChartTwo />
      </div>}
    </>
  );
};

export default ECommerce;
