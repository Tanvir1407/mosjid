import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import apiClient from "../../../api/api";
import { TbFileInvoice } from "react-icons/tb";
import flatpickr from "flatpickr";

export default function CreateInvoice() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(""); // For the date picker
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  // Fetch invoice categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/invoice-category?query=all");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Initialize flatpickr
  useEffect(() => {
    flatpickr(".form-datepicker", {
      dateFormat: "Y-m-d", // Match the backend date format
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          const localDate = selectedDates[0];
          setDate(localDate.toLocaleDateString("en-CA")); // Format as 'YYYY-MM-DD'
        }
      },
    });
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!selectedOption || !date || !amount) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      await apiClient.post("/invoice", {
        invoiceCategoryId: parseInt(selectedOption), // Convert category ID to integer
        date,
        amount: parseFloat(amount), // Ensure amount is a number
        donnerName: name,
      });

      setSuccessMessage("Invoice added successfully!");
      setAmount("");
      setDate("");
      setSelectedOption("");
      setName("");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred while adding the invoice."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
        <div className="max-w-full flex justify-between items-center">
          <h1 className="text-gray-700 dark:text-white font-semibold">Create New Invoice</h1>
          <Link
            to="/admin/all-invoice"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <span>
              <IoIosArrowBack />
            </span>
            back
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
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Donner Name
            </label>
            <input
              type="text"
              placeholder="Enter donner name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>

          <div className="mb-6">
            <label className="mb-3 block text-black dark:text-white">Select Invoice Category</label>
            <div className="relative z-20 bg-white dark:bg-form-input">
              <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                <TbFileInvoice size={22} />
              </span>
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input text-black dark:text-white"
                required
              >
                <option value="" disabled>
                  Invoice Category
                </option>
                {data.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Date
            </label>
            <input
              className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              placeholder="Select Date"
              value={date}
              readOnly
              required
            />
          </div>

          <div className="my-5">
            <input
              type="submit"
              value="Create New Invoice"
              className="w-full cursor-pointer rounded-lg border border-meta-3 bg-meta-3 p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
