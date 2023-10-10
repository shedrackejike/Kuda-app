import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import LandingPage from './Pages/LandingPage';
import Save from './Pages/Save';
import Transfer from './Pages/Transfer';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{
   const getEl =  document.querySelector(".Personal")

   if (getEl) {
    const elementStyle = window.getComputedStyle(getEl);
console.log(elementStyle.display);
if (elementStyle.display === "none") {
   return console.log("Nkem e ekpo");
}
if (elementStyle.display !== "none") {
  return  getEl.style.setProperty("display", "none")
  
}
   }

  },[])

  return (
    
    <ChakraProvider>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" index element={<LandingPage />}/>
        <Route path="/save" index element={<Save />}/>
        <Route path="/Transfar" index element={<Transfer />}/>

      </Routes>
      
      </BrowserRouter>
    
  </ChakraProvider>
  );
}

export default App;
