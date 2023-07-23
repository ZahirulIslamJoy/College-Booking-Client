import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Profile = () => {

    const {user} =useContext(AuthContext);

  return (
    <div className="bg-[#010313] text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 pb-12">User Profile</h1>
        <div class="w-full mx-auto max-w-sm pb-12 bg-[#0a192fe3] rounded-lg shadow">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mt-2 mb-3 rounded-full shadow-lg"
              src={user?.photoURL}
              alt="instructor image"
            />
            <h5 class="mb-1 text-xl font-medium  dark:text-white">
              {user?.displayName}
            </h5>
            <span class="text-sm  dark:text-gray-400">
              {user?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
