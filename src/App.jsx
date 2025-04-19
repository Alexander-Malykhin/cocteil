import React from 'react';
import {Route, Routes} from "react-router";
import HomePage from "./pages/homePage.jsx";

const App = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
        </Routes>
    );
};

export default App;