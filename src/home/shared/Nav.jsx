import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {user,handeleSignOut}=useContext(AuthContext);

   const  handleSignOut =()=>{
        handeleSignOut()
   }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-200  lg:h-[90px]  text-[#D8E0FC] ${
        scrolled ? "bg-[#18162c]" : "bg-[#1A192A]"
      }`}
    >
      <div className="  hidden  lg:flex w-[90%]  h-full  items-center pt-4 mx-auto justify-between">
        <div className="text-2xl font-bold">
          <h1>
          Admission Zone
          </h1>
        </div>
        <div className="flex text-sm font-semibold gap-5">
          <Link to="/"><h1 className="transition-underline cursor-pointer">Home</h1></Link>
          <Link to='/clg' ><h1 className="transition-underline  cursor-pointer ">College</h1></Link>
         <Link to="/admission" ><h1 className="transition-underline cursor-pointer">Admission</h1></Link>
        <Link to="/myclg" ><h1 className="transition-underline  cursor-pointer ">My College</h1></Link>
        {
            user ? <Link to="/user"><span className="text-[#64ffda] cursor-pointer" >{user.displayName} </span> </Link> :<Link to="/login"><h1 className="transition-underline cursor-pointer">Login</h1></Link>
        }
        {
            user?<span><button onClick={handleSignOut} >Signout</button></span>:""
        }
        </div>
      </div>
      <div className="w-[90%] mx-auto ">
        <div className="lg:hidden flex justify-between items-center ">
          <div className="text-2xl font-bold">
            <h1>
              Logo
            </h1>
          </div>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-[#1A192A] rounded shadow-sm">
                <div className="flex items-center justify-end  mb-4">
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-3 -mt-6 ">
                    <li>
                      <a
                        to="/shop"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      >
                        Experience
                      </a>
                    </li>
                    <li>
                      <a
                        to="/cart"
                        aria-label="Cart"
                        title="Cart"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      ></a>
                    </li>
                    <li>
                      <a
                        to="/about"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        to="/about"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        to="/about"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        to="/about"
                        className="font-medium transition-underline  text-[#D8E0FC]  "
                      >
                        Resume
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
