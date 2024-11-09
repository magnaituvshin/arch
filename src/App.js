import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom"; 
import { Home, Navbar, Portfolio, About, Contact, Footer, ProjectDetail } from "./components";
import "./App.css";
const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/portfolio/product:projectId" element={<ProjectDetail />} ></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;