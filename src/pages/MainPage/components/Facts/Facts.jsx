/*Наша статистика*/
import React from "react";
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import "./Facts.css"
import images from "./image"
import Fact from "./fact"
const Facts = () => {
    return (
        <div className="common_block facts">
            <div className="pre_indoor_block pre_facts_block">
                <h3> Наша статистика </h3>
                <a name="statistic"></a>
            </div>
            <Fact image={images.star} count={1000000} title={"Более 1 000 000 человек составляют нашу потенциальную аудиторию"} />
            <Fact image={images.events} count={365} title={"Мы вещаем 24 часа в сутки 365 дней в году"} />
            <Fact image={images.docs} count={10000} title={"Более 10 000 песен на русском языке"} />
            <Fact image={images.earth} count={35000} title={"Более 35000 часов онлайн радио прослушиваний каждый месяц"} />

           {/*<div className="indoor_block facts_block">*/}
           {/*     <img src={images.star} height={127} width={127} />*/}
           {/*     <h2><span className="counter">1000000</span></h2>*/}
           {/*     <h5>Более 1 000 000 человек составляют нашу потенциальную аудиторию</h5>*/}
           {/* </div>*/}
           {/* <div className="indoor_block facts_block">*/}
           {/*     <img src={images.events} height={127} width={127} />*/}
           {/*     <h2><span className="counter">365</span></h2>*/}
           {/*     <h5>Мы вещаем 24 часа в сутки 365 дней в году</h5>*/}
           {/* </div>*/}
           {/* <div className="indoor_block facts_block">*/}
           {/*     <img src={images.docs} width={127} height={127}/>*/}
           {/*     <h2><span className="counter">10000</span></h2>*/}
           {/*     <h5>Более 10 000 песен на русском языке</h5>*/}
           {/* </div>*/}
           {/* <div className="indoor_block facts_block">*/}
           {/*     <img src={images.earth} width={127} height={127} />*/}
           {/*     <h2><span className="counter">35000</span></h2>*/}
           {/*     <h5>Более 35000 часов онлайн радио прослушиваний каждый месяц.</h5>*/}
           {/* </div>*/}
        </div>
    )
};

export default Facts;