import { Link } from "react-router-dom";
import Btn from "./Btns";

const Footer = () => {
  return (
    <>
      <div className="bg-black mt-[-100px]">
        <div className="text-white md:flex justify-between mx-[100px]">
          <div className="flex flex-col gap-2 my-[50px]">
            <p>
              <img src="./logo.png" width="150px" alt="" />
            </p>
            <p className="flex  flex-col gap-3 ">
              <p className="uppercase font-bold">customer services</p>
              <code>+(480)555-0103</code>
            </p>
          </div>
          <div className="flex flex-col gap-4 my-[50px]">
            <h3 className="text-white font-bold"> Quick Links</h3>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-red-600">
                <Link to="#">About Us</Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="#">Blog</Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="#">Plicing Plan</Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="#">FAQs</Link>
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 my-[50px]">
            <h3 className="text-white font-bold">Movies To Watch</h3>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-red-600 text-white">
                <Link to="#">Top Trending</Link>
              </li>
              <li className="hover:text-red-600 text-white">
                <Link to="#">Recommended</Link>
              </li>
              <li className="hover:text-red-600 text-white">
                <Link to="#">Popular</Link>
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 my-[50px]">
            <h3 className="text-white font-bold">About Company</h3>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-red-600 text-white">
                <Link to="#">Contact Us</Link>
              </li>
              <li className="hover:text-red-600 text-white">
                <Link to="#">Privacy Policy</Link>
              </li>
              <li className="hover:text-red-600 text-white">
                <Link to="#">Terms Of Use</Link>
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-4 my-[50px]">
            <h3 className="text-white font-bold flex flex-col ">
              Subscribe News letter
            </h3>
            <p>
              <input
                type="text"
                placeholder="Email"
                className="h-9 pl-3 text-black"
              />
            </p>
            <Btn name="SUBSCRIBE" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
