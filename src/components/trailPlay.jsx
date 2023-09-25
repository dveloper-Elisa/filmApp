import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Trailer = () => {
  const { key } = useParams();
  return (
    <>
      <div className="flex items-center my-[100px] justify-center md:flex">
        <div className="flex flex-col">
          <div className="flex">
            <YouTube videoId={`${key}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trailer;
