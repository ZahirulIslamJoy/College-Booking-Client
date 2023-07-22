import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ClgDetails = () => {
const [college, setCollege] = useState([]);
const { id } = useParams();

  axios.get(`http://localhost:5000/class/${id}`).then((res) => {
    setCollege(res.data);
  });



  return (
    <div className="bg-[#010313] min-h-screen h-full text-white">
      <div>
        <div className="w-[85%] mx-auto pb-20 ">
          <h1 className="text-4xl text-center pt-32 ">College Details</h1>
          <div className="flex mt-12 flex-col items-center bg-[#0a192fe3]   text-[#D8E0FC]  rounded-lg shadow md:flex-row md:max-w-9xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full rounded-t-lg h-370px  md:h-[450px]  md:w-96 md:rounded-none md:rounded-l-lg"
              src={college.college_image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-3xl font-bold">
                {college.college_name}
              </h5>
              <p className="mb-3  font-medium">
                Ratings:{college.college_rating}
              </p>
              <p className="mb-3  font-medium">
                Admission:{college.admission_date}
              </p>
              <p className="mb-3  font-medium ">
                Research:{college.research_count}
              </p>
              <p className="mb-3  font-medium">
                Events :{college.details?.events}
              </p>
              <p className="mb-3  font-medium">
                Sports Facilities :  {
                college.details?.sports_facilities.map(item =>
                    <p>{item}</p>
                )
              }
              </p>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClgDetails;
