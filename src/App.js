import React from 'react';
import './App.css';
import Header from "./Component/Header/Header";
import Down_header from "./Component/Header/Down_header";
import Facts from "./Component/Facts/Facts";
import Partners from "./Component/Partners/Partners";
import DJ from "./Component/DJ";
import Block_area from "./Component/Application/Block_area";
import Note from "./Component/Note/Note";
import News from "./Component/News/News";
import Com_con from "./Component/Contact/Сommunication-contacts";
import Footer from "./Component/Footer/Footer";

const App = () => {
    return (
        <div className="Main">
            <div><Header/></div>
            <section><Down_header/></section>
            <section><Facts/></section>
            <section><Partners/></section>
            <section><DJ/></section>
            <section><Block_area/></section>
            <section><Note/></section>
            <section><News/></section>
            <section><Com_con/></section>
            <div><Footer/></div>
        </div>
    )
};

export default App;
