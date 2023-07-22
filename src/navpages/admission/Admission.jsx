import React, { useState } from "react";

const Admission = () => {

    const [college, setCollege] = useState([]);

  axios.get("http://localhost:5000/class").then((res) => {
    setCollege(res.data);
  });




  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">All Colleges List</h1>
      </div>
    </div>
  );
};

export default Admission;
