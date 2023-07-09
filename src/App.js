import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element = {<Welcome />} />
    <Route path="/home" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
