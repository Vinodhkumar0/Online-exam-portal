import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import About from "./components/pages/about";
import Login from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import Signin from "./components/pages/forms/signin";
import Register from "./components/pages/register";
import Home from "./components/pages/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Footer from "./components/footer";
// import Axios from "./components/httpRequest/axios";
import Bank from "./components/bank";
import Instructions from "./components/pages/instructions";
import Footer from "./components/footer";



function App() {
  
  return (
    
  
    <div>

      <BrowserRouter>
        <Navbar></Navbar>
        <div style={{ marginTop: "8vh" }}>
          <Routes>
            
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/bank"  element={<Bank />} />
            
          </Routes>
        </div>
       
        
      </BrowserRouter>
      <Footer></Footer>
      {/* <Bank></Bank> */}
      
    </div>

  );
}
export default App;
