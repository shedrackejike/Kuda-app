import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import LandingPage from "./Pages/LandingPage";
import Save from "./Pages/Save";
import Transfer from "./Pages/Transfer";
import { useEffect } from "react";
import Investment from "./Pages/Investment";
import Kudacard from "./Pages/Kudacard";
import Electricity from "./Pages/Electricity";
import Airtime from "./Pages/Airtime";
// import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    const getEl = document.querySelector(".Personal");
    const getElSed = document.querySelector(".shrdrack");
    const getElSed1 = document.querySelector(".shrdrack1");
    const getElSedGR = document.querySelector(".jdcbcccxbjh");

    getElSed.onclick = () => {
      getEl.style.display = "none";
    };

    getElSed1.onclick = () => {
      getEl.style.display = "none";
    };

    getElSedGR.onmouseover = () => {
      getEl.style.display = "flex";
    };

    getEl.onmouseleave = () => {
      getEl.style.display = "none";
    };
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/save" element={<Save />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/kuda" element={<Kudacard />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/airtime" element={<Airtime />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
