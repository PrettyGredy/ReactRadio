/*Наша статистика*/
import React from "react";
import "/React/ProgektRadio/my-app/src/App.css"
import "./Facts.css";
import docs from "./docs.png";
import events from "./events.png"
import star from "./star.png"
import earth from "./earth.png"

const Facts = () => {
    return (
        <div className="common_block facts">
            <div className="pre_facts_block">
                <h3> Наша статистика </h3>
            </div>
            <div className="indoor_block facts_block">
                <img src={star} height={127} width={127} />
                <h2>1000000</h2>
                <h5>Более 1 000 000 человек составляют нашу потенциальную аудиторию</h5>
            </div>
            <div className="indoor_block facts_block">
                <img src={events} height={127} width={127} />
                <h2>365</h2>
                <h5>Мы вещаем 24 часа в сутки 365 дней в году</h5>
            </div>
            <div className="indoor_block facts_block">
                <img src={docs} width={127} height={127}/>
                <h2>10000</h2>
                <h5>Более 10 000 песен на русском языке</h5>
            </div>
            <div className="indoor_block facts_block">
                <img src={earth} width={127} height={127} />
                <h2>35000</h2>
                <h5>Более 35000 часов онлайн радио прослушиваний каждый месяц.</h5>
            </div>
        </div>
    )
};

export default Facts;