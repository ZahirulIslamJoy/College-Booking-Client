import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>
        <div className="h-screen bg-black">
          <img className="w-full  h-[full] " src="https://i.ytimg.com/vi/sWSYtK3HqW0/maxresdefault.jpg" alt="" />
          <div className="text-center -mt-48  ">
            <Link to="/">
                <button className="px-2 py-2 bg-blue-700 rounded-xl">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;