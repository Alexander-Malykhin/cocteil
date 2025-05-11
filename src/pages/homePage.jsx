import React from 'react';
//COMPONENTS
import Header from "../components/Header/Header.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import About from "../components/About/About.jsx";
import Stock from "../components/Stocks/Stock.jsx";
import Reviews from "../components/Reviews/Reviews.jsx";
import Questions from "../components/Questions/Questions.jsx";
import Cooperation from "../components/Cooperation/Cooperation.jsx";
import Invitation from "../components/Invitation/Invitation.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <Welcome/>
            <About/>
            <Stock/>
            <Reviews/>
            <Questions/>
            <Cooperation/>
            <Invitation/>
            <Footer/>
        </>
    );
};

export default HomePage;