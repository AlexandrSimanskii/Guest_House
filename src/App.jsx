import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Information from "./pages/Information/Information";
import Loyout from "./layout/Loyout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyout />} >
        <Route path="home" element={<Home />} />
        <Route path="inform" element={<Information />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
