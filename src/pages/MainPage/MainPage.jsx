import React from "react";
import Down_header from "./components/Header/Down_header";
import Facts from "./components/Facts/Facts";
import Partners from "./components/Partners/Partners";
import SimpleSlider from "./components/DJ";
import Block_area from "./components/Application/Block_area";
import Note from "./components/Note/Note";
import News from "./components/News/News";
import Com_con from "./components/Contact/Сommunication-contacts";
import Footer from "./components/Footer/Footer";

const MainPage = () => {
    return (
        <div className="Main">
            <section><Down_header/></section>
            <section><Facts/></section>
            <section><Partners/></section>
            <section><SimpleSlider/></section>
            <section><Block_area/></section>
            <section><Note/></section>
            <section><News/></section>
            <section><Com_con/></section>
            <Footer/>
        </div>
    )
};

export default MainPage;
