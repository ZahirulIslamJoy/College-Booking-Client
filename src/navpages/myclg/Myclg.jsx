import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const Myclg = () => {

    const { user } = useContext(AuthContext);
    const [clg,setClg]=useState([]);
    const email = user?.email;

    useEffect(()=>{
        axios.get(`http://localhost:5000/admission/${email}`).then((res) => {
            setClg(res.data);
      })
      },[])
      
      console.log(clg);

  return (
    <div className="bg-[#010313] min-h-screen text-[#D8E0FC]">
      <div className="w-[85%] mx-auto ">
        <h1 className="text-3xl  text-center pt-32 mb-28">Admission List </h1>
      </div>
    </div>
  );
};

export default Myclg;
