import Btn from "./Btns";
import React from "react";
import Cardcomponect from "./Cardcomponect";
import Footer from "./footer";
import { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const getfetch = async () => {
      const url = "https://api.themoviedb.org/3/movie/now_playing";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI",
        },
      };

      try {
        const response = await axios.get(url, options);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getfetch();
  }, []);
  return (
    <>
      <div className="flex img relative w-[100%] h-[500px] p-[70px] md:flex ">
        <div className="flex flex-col">
          <div className="text-white mt-[25px]  ">
            <div className="text-white ">
              <p className="text-[40px] font-bold">THE ILLUSION</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 flex gap-1">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <span>4.5</span>
              <span>
                <img src="./public/IMDB_Logo.svg" alt="IMDB_Logo" />
              </span>
              <span className="bg-sky-300 font-nomal px-1">Action</span>
              <span className="w-fit">1hr : 22mins</span>
            </div>
          </div>
          <div className="font-nomal text-white w-[55vw] ">
            <p>
              An illusion is a distortion of the senses, which can reveal how
              the human brain normally organizes and interprets sensory
              stimulation. Although illusions distort our perception of reality,
              they are generally shared by most people.
            </p>
          </div>

          <div className="text-white my-5">
            <Btn name={"Play Now"} play={<i className="fa fa-play"></i>} />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-end">
            <i className="text-white fa fa-gear text-[40px] absolute ml-[14%] "></i>

            <i className="text-red-600 cursor-pointer bount fa fa-play mt-[10rem] text-[50px]  "></i>
          </div>
        </div>
      </div>

      {/* card content Home */}
      <div className="md:flex md:justify-center bg-gray-800 w-[100%] "></div>

      {/* last Edit films of the year */}
      <div className="bg-gray-900 mt-[-50px]">
        <div className="my-[50px] md:flex items-center mx-[100px] ">
          <div className="flex flex-col my-[50px] ">
            <div className="text-white text-[30px] ">
              <b>BAILEY</b>
            </div>
            <div className="my-4">
              <span className="text-yellow-600 flex flex-col gap-2">
                <i className="fa fa-star "></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
              <div className="my-4">
                <p className=" colors">4.2 (imdb)</p>
                <p className=" colors">15+</p>
                <p className="text-white">2hr : 30mins</p>
              </div>
              <div className="flex flex-col">
                <div className="text-white">
                  <h1 className="font-bold text-[30px] mb-4 ">
                    Movie of the year
                  </h1>
                </div>
                <p className="text-white w-fit flex-wrap pr-[60px] ">
                  Baileys Irish Cream is an Irish cream liqueur an alcoholic
                  beverage flavoured with cream, cocoa, and Irish whiskey made
                  by Diageo at Republic of Ireland and in Mallusk, Northern
                  Ireland.
                </p>
              </div>
              <div className="btn">
                <Btn name={"Play now"} play={<i className="fa fa-play"></i>} />
              </div>
            </div>
          </div>
          <div className=" mt-3 h-[350px] mb-[-50px] md:flex-col">
            <img src="./public/02.jpg" width={"500px"} alt="02 image is here" />
          </div>
        </div>
      </div>
      <div className="flexbg-yellow-700 absolute items-center mt-[-90px] animate-pulse">
        <div className="text-white text-[30px] font-bold ">
          <p>Sugested For Your</p>
        </div>
      </div>

      {/* other Card Devision */}
      <div className=" md:flex mb-[6rem] mt-[-50px] ">
        {data.map((item, index) => {
          return (
            <>
              <Cardcomponect
                key={index}
                id={item.id}
                image={item.backdrop_path}
                name={item.original_title}
                duration={item.vote_average}
              />
            </>
          );
        })}
        <></>
      </div>
      {/* creatio of the footer */}

      <Footer />
    </>
  );
};

export default Home;
