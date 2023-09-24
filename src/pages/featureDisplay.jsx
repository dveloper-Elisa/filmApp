import Feature from "../components/feature";
import contectObj from "../data/Object";
import Footer from "../components/footer";

const AllFeature = () => {
  return (
    <>
      <h2 className="text-center text-blue-800 font-bold tracking-tight text-[20px]">
        Featured Client Stories
      </h2>
      <div className="md:flex flex-center mx-[70px] mb-[10rem]">
        {contectObj.map((cont, index) => {
          return (
            <>
              <Feature
                key={index}
                Content={cont.Content}
                Title={cont.Title}
                Name={cont.Name}
                imageName={cont.imageName}
              />
            </>
          );
        })}
      </div>
      {/* importing Componet footer */}
      <Footer />
    </>
  );
};
export default AllFeature;
