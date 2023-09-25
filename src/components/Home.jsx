import Btn from "./Btns";
import Cardcomponect from "./Cardcomponect";
import Footer from "./footer";

const Home = () => {
  const cards = [
    [
      {
        image: "./asset-10.jpg",
        name: "Fighting for",
        duration: "2hr : 50mis",
      },
      {
        image: "./asset-15.jpg",
        name: "Jumbal Queen",
        duration: "2hr : 50mis",
      },
      {
        image: "./17.jpg",
        name: "Gohst Coupel",
        duration: "2hr : 50mis",
      },
      {
        image: "./asset-8.jpg",
        name: "Latest Ball",
        duration: "2hr : 50mis",
      },
      {
        image: "./asset-6.jpg",
        name: "The Soldger",
        duration: "2hr : 50mis",
      },
    ],
    [
      {
        image: "./asset-7.jpg",
        name: "Fighting for",
        duration: "2hr : 50mis",
      },
      {
        image: "./Untitled-5.jpg",
        name: "Jumbal Queen",
        duration: "2hr : 50mis",
      },
      {
        image: "./Untitled-4.jpg",
        name: "Gohst Coupel",
        duration: "2hr : 50mis",
      },
      {
        image: "./Untitled-1.jpg",
        name: "Latest Ball",
        duration: "2hr : 50mis",
      },
      {
        image: "./asset-14.jpg",
        name: "The Soldger",
        duration: "2hr : 50mis",
      },
    ],
  ];

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
            <i className="text-white fixed fa fa-gear text-[40px] absolute ml-[14%] "></i>

            <i className="text-red-600 cursor-pointer bount fa fa-play mt-[10rem] text-[50px]  "></i>
          </div>
        </div>
      </div>

      {/* card content Home */}
      <div className="md:flex md:justify-center bg-gray-800 w-[100%] ">
        {cards[0].map((films, index) => {
          return (
            <Cardcomponect
              key={index}
              image={films.image}
              name={films.name}
              duration={films.duration}
            />
          );
        })}
      </div>

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
      <div className="flex animate-ping bg-yellow-700 absolute items-center mt-[-60px]">
        <div className="text-white text-[30px] font-bold">
          <p>Sugested For Your</p>
        </div>
      </div>

      {/* other Card Devision */}
      <div className=" md:flex mb-[6rem] mt-[-50px] ">
        {cards[1].map((send, index) => {
          return (
            <>
              <Cardcomponect
                key={index}
                image={send.image}
                name={send.name}
                duration={send.duration}
              />
            </>
          );
        })}
      </div>
      {/* creatio of the footer */}

      <Footer />
    </>
  );
};

export default Home;
