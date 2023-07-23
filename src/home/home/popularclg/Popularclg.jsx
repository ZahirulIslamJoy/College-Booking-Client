import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popularclg = () => {
  const [college, setCollege] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/class").then((res) => {
      setCollege(res.data);
    });
  }, []);

  const favClg = college.slice(0, 3);
  console.log(favClg);

  return (
    <div className="bg-[#010313] text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-12">Popular Colleges</h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favClg.map((single) => (
            <div
              key={single?._id}
              className="relative transition duration-200 transform hover:translate-x-3 mt-6 lg:mt-8"
            >
              <img
                className="object-fill rounded-lg h-[350px] w-full"
                src={single.college_image}
                alt=""
              />
              <div className="absolute flex justify-center flex-col p-4 text-white  hover:opacity-100 opacity-0 bg-black bg-opacity-75 inset-0">
                <p className="mb-2">Name:{single?.college_name}</p>
                <p className="mb-4">Ratings:{single?.college_rating}</p>
                <p className="mb-4">Admission Date:{single?.admission_date}</p>
                <p className="mb-4">Total Research:{single?.research_count}</p>
                <p className="mb-4">
                  Events:{single.details?.events.slice(0, 20)}....
                </p>
                <p className="mb-3  font-medium">
                  Sports Facilities :{" "}
                  {single.details?.sports_facilities.slice(0, 2).map((item) => (
                    <p>{item}</p>
                  ))}
                </p>
                <Link to={`/clg/${single?._id}`}>
                  <button className="px-2 py-1 bg-blue-700 rounded-xl">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popularclg;
