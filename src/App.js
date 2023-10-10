import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import LandingPage from './Pages/LandingPage';
import Save from './Pages/Save';
import Transfer from './Pages/Transfer';

function App() {
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
