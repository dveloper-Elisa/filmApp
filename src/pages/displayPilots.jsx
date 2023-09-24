import TrustPilots from "../components/pilotComp";
import pilots from "../data/pilots";
import Footer from "../components/footer";
const Pilots = () => {
  return (
    <>
      <div className="md:flex md:justify-center mb-[10rem]">
        {pilots.map((pilot, index) => {
          return (
            <>
              <TrustPilots
                key={index}
                Title={pilot.Title}
                Content={pilot.Content}
              />
            </>
          );
        })}
      </div>
      {/* importing Footer */}
      <Footer />
    </>
  );
};

export default Pilots;
