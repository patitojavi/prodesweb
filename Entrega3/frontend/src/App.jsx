import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home"
import Services from "./pages/services";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Layaut from "./components/layaut";


function App(){
  return (
  <div className="bg-slate-950 min-h-screen">
    <Navbar/> 
      <Layaut>
          <Routes>
            <Route path='/' element= {<Home></Home>}></Route>
            <Route path='/services' element= {<Services></Services>}></Route>
            <Route path="/about" element= {<About></About>}></Route>
            <Route path="/contact" element= {<Contact></Contact>}></Route>
            <Route path="/login" element= {<Login></Login>}></Route>
            <Route path="/register" element= {<Register></Register>}></Route>
            <Route path="*" element= {<Navigate to="/"></Navigate>}></Route>
          </Routes>
      </Layaut>
    <Footer/>
</div>
  )
}

export default App;
