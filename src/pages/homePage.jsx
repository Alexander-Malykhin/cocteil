import React from 'react';
import Header from "../components/Header/Header.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import About from "../components/About/About.jsx";
import Stock from "../components/Stocks/Stock.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Welcome/>
            <About/>
            <Stock/>
        </>
    );
};

export default HomePage;