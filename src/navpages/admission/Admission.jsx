import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [college, setCollege] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/class").then((res) => {
    setCollege(res.data);
  })
  },[])

  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">All Colleges List</h1>
        <div className="grid grid-cols-1 pb-20 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {college?.map((single) => (
            <div key={single?._id} className="bg-[#0a192fe3] ">
              <div className="p-5">
                <Link to={`/admission/${single?._id}`} ><h5 className="mb-2 text-xl font-bold tracking-tight ">
                {single.college_name}
                </h5></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admission;
