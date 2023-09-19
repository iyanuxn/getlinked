import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-dark webBg">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
