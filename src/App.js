import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    
    <ChakraProvider>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" index element={<LandingPage />}/>
      </Routes>
      
      </BrowserRouter>
    
  </ChakraProvider>
  );
}

export default App;
