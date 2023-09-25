import { Route, Routes } from "react-router-dom";
import Navigations from "./components/Navigation";
import LoginForm from "./components/loginform";
import Home from "./components/Home";
import ImpoDiv from "./pages/importDiv";
import AllFeature from "./pages/featureDisplay";
import Pilots from "./pages/displayPilots";
import SignUpt from "./components/signup";
import Details from "./components/detailmovie";
import Trailer from "./components/trailPlay";

const App = () => {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/login" element={<LoginForm userName={"use Name"} />} />
        <Route path="/" element={<Home />} />
        <Route path="/divs" element={<ImpoDiv />} />
        <Route path="/quesion" element={<AllFeature />} />
        <Route path="/q3" element={<Pilots />} />
        <Route path="/signUp" element={<SignUpt />} />
        <Route path="/detailmovie/:id" element={<Details />} />
        <Route path="/trail/:key" element={<Trailer />} />
      </Routes>
    </>
  );
};

export default App;
