import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import apiClient from "../../../api/api";

export default function CreateAnnouncement() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title || !desc) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      await apiClient.post("/announcement", {
        title,
        description: desc,
      });

      setSuccessMessage("Announcement created successfully!");
      setTitle("");
      setDesc("");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred while creating the announcement."
      );
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
        <div className="max-w-full flex justify-between items-center">
          <h1 className="text-gray-700 dark:text-white font-semibold">Create New Announcement</h1>
          <Link
            to="/admin/announcement"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            <span>
              <IoIosArrowBack />
            </span>
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
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2.5 block font-medium text-black dark:text-white">
              Description
            </label>
            <textarea
              type="text"
              rows={5}
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>

          <div className="my-5">
            <input
              type="submit"
              value="Create Announcement"
              className="w-full cursor-pointer rounded-lg border border-meta-3 bg-meta-3 p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
