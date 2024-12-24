import { useEffect, useState } from 'react';
import apiClient from '../../api/api';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Settings = () => {
  const [data, setData] = useState({
    companyName: '',
    phone: '',
    email: '',
    address: '',
    tagLine: ''
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/setting");
        setData({
          companyName: response.data.companyName,
          phone: response.data.phone,
          email: response.data.email,
          address: response.data.address,
          tagLine: response.data.tagLine
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await apiClient.put("/setting", data);
      console.log('Settings updated successfully:', response);
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Masjid Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  {/* Mosjid Name Field */}
                  <div className="mb-5.5">
                    <label className="block text-sm font-medium text-black dark:text-white" htmlFor="companyName">
                      Mosjid Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={data.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="mb-5.5">
                    <label className="block text-sm font-medium text-black dark:text-white" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="phone"
                      id="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Address Field */}
                  <div className="mb-5.5">
                    <label className="block text-sm font-medium text-black dark:text-white" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      name="email"
                      id="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Address Field */}
                  <div className="mb-5.5">
                    <label className="block text-sm font-medium text-black dark:text-white" htmlFor="address">
                      Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="address"
                      id="address"
                      value={data.address}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Tagline Field */}
                  <div className="mb-5.5">
                    <label className="block text-sm font-medium text-black dark:text-white" htmlFor="tagLine">
                      Tagline
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="tagLine"
                      id="tagLine"
                      value={data.tagLine}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end">
                    <button
                      className="rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
