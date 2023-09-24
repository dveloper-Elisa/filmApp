import { Link } from "react-router-dom";
import Btn from "./Btns";

const Navigations = () => {
  return (
    <>
      <div className="sticky mt-0">
        <div className="bg-gray-900 text-white flex justify-around items-center w-full py-1">
          <div className="w-[150px]">
            <img src="../public/logo.png" alt="" />
          </div>
          <div id="nav" className="hidden md:block">
            <ul className="flex gap-5">
              <li className="hover:text-red-600 cursor-pointer font-bold">
                <Link to="/">
                  Home <i className="fa fa-sort-down"></i>
                </Link>
              </li>
              <li className="hover:text-red-600 cursor-pointer font-bold">
                <Link to="/divs">
                  About Us <i className="fa fa-sort-down"></i>
                </Link>
              </li>
              <li className="hover:text-red-600 cursor-pointer font-bold">
                <Link to="/quesion">
                  Features <i className="fa fa-sort-down"></i>
                </Link>
              </li>
              <li className="hover:text-red-600 cursor-pointer font-bold">
                <Link to="/q3">
                  Blogs <i className="fa fa-sort-down"></i>
                </Link>
              </li>
              <li className="hover:text-red-600 cursor-pointer font-bold">
                Shop <i className="fa fa-sort-down"></i>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <i className="fa fa-bars "></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-user-circle"></i>

            <Btn name="Login" link="/login" />
            <Btn name="Sign up" link="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigations;
