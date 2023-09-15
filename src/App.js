
// import './App.css';
// import components
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './Components/NavBar/Nav';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import Blog from './pages/Blog';
import Details from "./Components/Details";
import Location from "./Components/Location/Location";
import Newlocation from "./Components/Location/Newlocation";


function App() {
  return (
    <>
      
        <BrowserRouter>
         <Nav />
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/details/:name" element={<Details />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/location" element={<Location />} />
           <Route path="/newlocation/:category" element={<Newlocation />} />
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
