import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const Myclg = () => {
  const { user } = useContext(AuthContext);
  const [clg, setClg] = useState([]);
  const email = user?.email;

  useEffect(() => {
    axios.get(`http://localhost:5000/admission/${email}`).then((res) => {
      setClg(res.data);
    });
  }, []);

  console.log(clg);

  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">Admission List </h1>
     
      <div>
        <div className="relative mb-20 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-1 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 ml-6 py-3">
                 User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                 University Name
                </th>
                <th scope="col" className="px-6 py-3">
                 Selected Subject
                </th>
                <th scope="col" className="px-6 py-3">
                  Review
                </th>
              </tr>
            </thead>
            <tbody>
              {clg?.map((user, index) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 h-10 w-10 py-4">{user?.name}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user?.email}
                  </td>
                  <td className="px-6  py-4">{user?.clgName}</td>
                  <td className="px-6  cursor-pointer py-4">
                  {user?.subject}
                  </td>
                  <td className="px-6  cursor-pointer py-4">
                    <input type="text" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Myclg;
