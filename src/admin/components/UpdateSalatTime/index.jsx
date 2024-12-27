import { useEffect, useState } from "react";
import apiClient from "../../../api/api";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "../../common/Loader";

export default function UpdateSalatTime() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [azanTime, setAzanTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Extract the query parameters from the URL
  const { search } = useLocation();

  // Parse the query string
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("id"); // Gets the value of the 'id' parameter

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await apiClient.put(`/namaz-time/${id}`, {
        name,
        time,
        azanTime,
      });

      setSuccessMessage("Salat time updated successfully!");
      // Optional: Clear fields if not needed after update
      // setName("");
      // setTime("");
      // setAzanTime("");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
        "An error occurred while updating salat time."
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await apiClient.get(`/namaz-time/${id}`);
        setData(response.data);
        // Set the form fields with the data received
        setName(response.data.name);
        setTime(response.data.time);
        setAzanTime(response.data.azanTime);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        console.error("Error fetching data:", error);
        setErrorMessage("Failed to load salat time details.");
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
        {loader ? <Loader/> :
    
    <div>
      {/* Header */}
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
        <div className="max-w-full flex justify-between items-center">
          <h1 className="text-gray-700 dark:text-white font-semibold">
            Update {data?.name} Salat Time
          </h1>
          <Link
            to="/admin/salat-time"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <IoIosArrowBack />
            Back
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="w-[500px] mx-auto">
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Salat name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Azan Time
            </label>
            <input
              type="text"
              placeholder="Enter Azan time"
              value={azanTime}
              onChange={(e) => setAzanTime(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Salat Time
            </label>
            <input
              type="text"
              placeholder="Enter Salat time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="submit"
              value="Update Salat Time"
              className="w-full cursor-pointer rounded-lg border border-meta-3 bg-meta-3 p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
}
    </>
  );
}
