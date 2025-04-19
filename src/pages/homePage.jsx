import React from 'react';
import Header from "../components/Header/Header.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import About from "../components/About/About.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Welcome/>
            <About/>
        </>
    );
};

export default HomePage;