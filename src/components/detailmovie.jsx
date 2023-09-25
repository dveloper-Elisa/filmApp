import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  const gettrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "get",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI",
      },
    };
    try {
      const response = await axios.get(url, options);
      setTrailer(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  gettrailer();

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="border">
          <div className="flex flex-center flex-col gap-3">
            {trailer.map((item, index) => {
              return (
                <Link to={`/trail/${item.key}`} key={index}>
                  <p className="border m-1 cursor-pointer">{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
