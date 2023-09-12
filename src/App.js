import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    
    <ChakraProvider>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route/>
      </Routes>
      
      </BrowserRouter>
    
  </ChakraProvider>
  );
}

export default App;
