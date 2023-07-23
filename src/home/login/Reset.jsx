import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Reset = () => {

    const {resets} =useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        const email = data.email;
        resets(email)
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Check Your Email",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        
    }
  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">Reset Password</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email Address "
            />
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none "
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
