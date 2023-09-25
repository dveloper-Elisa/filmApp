import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cardcomponect({ id, image, duration, content, title }) {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  useEffect(() => {
    axios.get(url);
  }, []);

  return (
    <>
      {/* Creating the Page of the THE ILLUSTRATION*/}

      <div className=" flex justify-center bg-gray-800">
        <div className=" mt-[10px] md:w-64 rounded h-[390px]">
          <Link to={`/detailmovie/${id}`}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${image}`}
              alt=" image not found"
              className="w-[14rem] transition-3 hover:border-b-[60px] duration-500 hover:-translate-y-8 hover:mb-[1px] hover:border-[10px] border-gray-900"
            />
          </Link>
          <i
            id="play"
            className="fa fa-play-circle bg-white absolute mt-[-150px] ml-20 text-[40px] font-[20px] rounded-full text-red-600"
          ></i>
          <p className=" text-[25px] mt-[-100px] text-left ml-8 relative text-white bg-blue bd-full">
            {name}
          </p>
          <p className="relative  text-left ml-8 text-white">{duration}</p>
        </div>
      </div>
    </>
  );
}

export default Cardcomponect;
