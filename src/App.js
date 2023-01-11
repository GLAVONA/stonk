import React from "react";
import What from "./components/What/What";
import Burn from "./components/Burn/Burn";
import How from "./components/How/How";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <main id="home">
        <Navbar />
        <Burn id="burn"/>
        <What id="what"/>
        <How id="how"/>
      </main>
    </>
  );
};

export default App;
