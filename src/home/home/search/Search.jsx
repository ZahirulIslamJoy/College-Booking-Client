import { data } from "autoprefixer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Search = () => {
  const [allclg, setAllclg] = useState([]);
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    fetch(`http://localhost:5000/searchclg/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setAllclg(data);
        reset();
        const length = data.length;
        if (length == 0) {
          setStatus("No matching result found");
        } else {
          setStatus(`${length} matching result found`);
        }
      });
  };

  console.log(allclg);

  return (
    <div className="bg-[#010313] text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-8">Search Colleges</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              {...register("name")}
              type="text"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email Address "
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600" role="alert">
                Name is required
              </p>
            )}
            <button
              type="submit"
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
            >
              Search
            </button>
          </div>
        </form>
        <div>
            <p className="text-center mb-20">{status}</p>
          <div className="grid grid-cols-1 pb-20 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allclg?.map((single) => (
              <div key={single?._id} className="bg-[#0a192fe3] ">
                <img
                  className="rounded-t-lg  h-[250px] w-full "
                  src={single.college_image}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight ">
                    Name: {single.college_name}
                  </h5>
                  <p className="mb-3 font-normal">
                    Rating: {single.college_rating}
                  </p>
                  <p className="mb-3 font-normal">
                    Admission Date: {single.admission_date}
                  </p>
                  <p className="mb-3 font-normal">
                    Total Research: {single.research_count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
