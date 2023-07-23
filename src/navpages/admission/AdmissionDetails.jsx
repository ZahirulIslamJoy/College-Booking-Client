import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdmissionDetails = () => {
  const { user } = useContext(AuthContext);
  const [college, setCollege] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/class/${id}`).then((res) => {
      setCollege(res.data);
    });
  }, []);
  console.log(college);

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const name = user?.displayName;
  const email = user?.email;
  const ids = id;
  const clgName = college?.college_name;
  const onSubmit = (data) => {
    const subject =data.subject;
    const sendData ={
      name,email,ids, clgName,subject
    };
    if(email == null){
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Login to apply College",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    fetch(`http://localhost:5000/admission`,{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(sendData)
    })
    .then(res  => res.json())
    .then(data  => {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You apply to that college",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } )
    
  };

  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">Apply Below!!!</h1>
      </div>
      <div className="w-1/2  mt-12 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Name*
            </label>
            <input
              type="text"
              value={user?.displayName || "Login First "}
              readOnly
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Email*
            </label>
            <input
              value={user?.email   || "Login First " }
              readOnly
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Subject*
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.subject?.type === "required" && (
              <p className="text-red-600" role="alert">
                Subject Url is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Your Photo Url*
            </label>
            <input
              {...register("pht", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.pht?.type === "required" && (
              <p className="text-red-600" role="alert">
                Photo is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Phone Number*
            </label>
            <input
              {...register("phone", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.phone?.type === "required" && (
              <p className="text-red-600" role="alert">
                Phone No is Required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Date of Birth*
            </label>
            <input
              {...register("p", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.p?.type === "required" && (
              <p className="text-red-600" role="alert">
                Date of Birth is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionDetails;
