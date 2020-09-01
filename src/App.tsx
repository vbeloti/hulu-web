import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";
import Results from "./components/Results";
import requests from "./services/requests";

function App() {
  const [selectedOptions, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
