import React from "react";
import ReactDOM from "react-dom/client";
import{ BrowserRouter, Routes, Route, Link} from "react-router";
import Home from "./src/Home";
import Dashboard from "./src/Dashboard";
import Contact from "./src/Contact";
import Details from "./src/Details";


function App() {
    return(
        <>
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);