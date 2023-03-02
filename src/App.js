import React from "react";
import Aside from "./components/aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./CSS/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
