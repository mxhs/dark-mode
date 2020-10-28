import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  
  const handleDarkMode = (setDarkMode) => {
    // const [darkMode, setDarkMode] = useState(false); 
    // * Custom hooks can accept your useState initializations which are then able to be passed on to the child components
    let localStorageDarkMode = window.localStorage.getItem('Dark Mode')
    //v This means you're accessing page for the first time because null means there isn't a localStorage yet
    if (localStorageDarkMode === null){
      console.log('lsDM', localStorageDarkMode)
      window.localStorage.setItem('Dark Mode', false)
      localStorageDarkMode = false
      console.log('after', localStorageDarkMode)
    } 
    if(setDarkMode !== null){
      localStorageDarkMode = !localStorageDarkMode
    }
    return localStorageDarkMode
  }

  // This useEffect is going to run a function everytime we load the page. 
  // This is what you use to check if there a mode saved in local storage, 
  // and if not it will create one.
  useEffect(() =>{
    handleDarkMode()
  },[])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={handleDarkMode() ? "dark-mode App" : "App"}>
      <Navbar darkMode={handleDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
