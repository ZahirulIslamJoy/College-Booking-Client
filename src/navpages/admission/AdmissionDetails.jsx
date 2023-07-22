import React from "react";
import { useForm } from "react-hook-form";

const AdmissionDetails = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const photo = data.photo;
        const email = data.email;
        const password = data.password;
        const confirmpass = data.confirmpassword;
    
    }    



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
              {...register("name", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600" role="alert">
                Name is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Email*
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600" role="alert">
                Email is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
              Subject*
            </label>
            <input
              {...register("photo", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-600" role="alert">
                Photo Url is required
              </p>
            )}
          </div>
          <div>
            <label className="block mb-4 text-sm font-medium text-white dark:text-white">
             Your  Photo Url*
            </label>
            <input
              {...register("subject", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-600" role="alert">
                Subject is required
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
            {errors.photo?.type === "required" && (
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
              {...register("photo", { required: true })}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" "
            />
            {errors.photo?.type === "required" && (
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
