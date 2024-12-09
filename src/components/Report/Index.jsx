import { useEffect, useState } from 'react';
import CardDataStats from '../../admin/components/CardDataStats';
import apiClient from '../../api/api';
import { BiDonateHeart } from 'react-icons/bi';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiTakeMyMoney } from 'react-icons/gi';

const Report= () => {
  
  //====================API=============================
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/dashboard");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  //======================API===========================

  return (
    <div className='p-15 bg-gradient-to-r from-gray-200 to-gray-100'>
      
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
      Donation And Expense Report
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 lg:px-12">
        <CardDataStats title="Total Donation" total={data?.totalDonation} rate="0.43%" levelUp>
          <BiDonateHeart className='text-blue-500' />
        </CardDataStats>
        <CardDataStats title="Total Expense" total={data?.totalExpense} rate="0.21%" levelUp>
          {/* icon here */}
          <FaMoneyBillTrendUp className='text-blue-500'/>
        </CardDataStats>
        <CardDataStats title="Jummah Collection" total={data?.lastWeekJummahCollection} rate="0.11%" levelUp>
          {/* icon here */}
          <GiTakeMyMoney className='text-blue-500'/>
        </CardDataStats>
        <CardDataStats title="Magrib Collection" total={data?.lastWeekMagribCollection} rate="0.31%" levelDown>
          {/* icon here */}
          <GiTakeMyMoney className='text-blue-500'/>
        </CardDataStats>
        
      </div>
    </div>
  );
};

export default Report;
