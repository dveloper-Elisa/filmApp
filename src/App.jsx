import { Route, Routes } from "react-router-dom";
import Navigations from "./components/Navigation";
import LoginForm from "./components/loginform";
import Home from "./components/Home";
import ImpoDiv from "./pages/importDiv";

import AllFeature from "./pages/featureDisplay";

import Pilots from "./pages/displayPilots";
const App = () => {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/divs" element={<ImpoDiv />} />
        <Route path="/quesion" element={<AllFeature />} />
        <Route path="/q3" element={<Pilots />} />
      </Routes>
    </>
  );
};

export default App;
