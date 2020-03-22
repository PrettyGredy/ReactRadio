import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import Header from "./pages/MainPage/components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <MainPage/>
        </div>
    )
};

export default App;
