import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const College = () => {
  const [college, setCollege] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/class").then((res) => {
    setCollege(res.data);
  })
  },[])

  return (
    <div className="bg-[#010313] text-[#D8E0FC]" >
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">
          All Colleges
        </h1>
        <div className="grid grid-cols-1 pb-20 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {college?.map((single) => (
            <div
              key={single?._id}
              className="bg-[#0a192fe3] "
            >
              <img
                className="rounded-t-lg  h-[250px] w-full "
                src={single.college_image}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight ">
                  Name: {single.college_name}
                </h5>
                <p className="mb-3 font-normal">Rating: {single.college_rating}</p>
                <p className="mb-3 font-normal">
                  Admission Date: {single.admission_date}
                </p>
                <p className="mb-3 font-normal">
                  Total Research: {single.research_count}
                </p>
                <Link to={`/clg/${single?._id}`} ><button className="px-2 py-1 bg-blue-700 rounded-xl">Details</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
