import React from 'react';
import './App.css';
import Header from "./Component/Header";
import Down_header from "./Component/Down_header";
import Facts from "./Component/Facts/Facts";
import Partners from "./Component/Partners/Partners";
import DJ from "./Component/DJ";
import Block_area from "./Component/Block_area";
import Upcoming_events from "./Component/Upcoming_events";
import News from "./Component/News";
import Com_con from "./Component/Сommunication-contacts";
import Footer from "./Component/Footer";

const App = () => {
    return (
        <div className="Main">
            <div><Header/></div>
            <section><Down_header/></section>
            <section><Facts/></section>
            <section><Partners/></section>
            <section><DJ/></section>
            <section><Block_area/></section>
            <section><Upcoming_events/></section>
            <section><News/></section>
            <section><Com_con/></section>
            <div><Footer/></div>
        </div>
    )
};

export default App;
