/* Дидшеи */
import React from "react";
import "./DJ.css"
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import edik from "./image/edik.jpeg"
import tatyana from "./image/tatyana.jpg"
import titioff from "./image/titioff.jpg"
import voronkov from "./image/voronkov.jpg"
import morozova from "./image/morozova.jpg"
import dasha from "./image/dasha.jpg"
import rokman from "./image/rokman.jpg"

class DJ extends React.Component {
    render() {
        return (
            <div className="DJ">
                <div className="pre_indoor_block">
                    <a name="djs"></a>
                    <h3>Наши Диджеи</h3>
                </div>
                <Slider
                    infinite={true}
                    speed={3000}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={100}
                    pauseOnHover={true}
                    nextArrow={<button id="prev" type="button" className="but">Туда сююдаааааааааааааааааааа</button>}

                >
                    <div className="DJ_ot_info">
                        <img src={edik} height={165} width={156}/>
                        <div className="DJ_info">
                            <h5>Эдуард Руссу</h5>
                            <span>Руководитель</span>
                            <p>Программый Директор</p>
                        </div>
                    </div>
                    <div>
                        <img src={tatyana} height={165} width={156}/>
                        <div className="DJ_info">
                            <h5>Татьяна Ларина</h5>
                            <span>Диджей</span>
                        </div>
                    </div>
                    <div>
                        <img src={titioff} height={165} width={156}/>
                        <div className="DJ_info">
                            <h5>Андрей Титов</h5>
                            <span>Диджей</span>
                        </div>
                    </div>
                    <div>
                        <img src={voronkov} height={206} width={165}/>
                        <div className="DJ_info">
                            <h5>Вячеслав Воронков</h5>
                            <span>Диджей</span>
                        </div>
                    </div>
                    <div>
                        <img src={morozova} height={165} width={156}/>
                        <div className="DJ_info">
                            <h5>Ирина Мороз</h5>
                            <span>Ведущая новостей</span>
                        </div>
                    </div>
                    <div>
                        <img src={rokman} height={206} width={165}/>
                        <div className="DJ_info">
                            <h5>Эдуард Рокмэн</h5>
                            <span>Диджей</span>
                        </div>
                    </div>
                    <div>
                        <img src={dasha} height={206} width={165}/>
                        <div className="DJ_info">
                            <h5>Дарья Мельникова</h5>
                            <span>Диджей</span>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default DJ;


