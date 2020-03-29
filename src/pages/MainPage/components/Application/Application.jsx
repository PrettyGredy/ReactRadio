import React from "react";
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import "./Application.css"
import images from "./image"

const Application = () => {
    return (
        <div className="common_block block_area">
            <div className="pre_indoor_block pre_area_info_block">
                <h3>Наше мобильное приложение</h3>
            </div>
            <div className="area_inf">
                <img src={images.mobprezent} width={540} height={540}/>
            </div>
            <div className="indoor_block area_info_block">
                <h5>Любимая радиостанция в любом месте и в любое время</h5>
                <p>Теперь Русское Радио 105.5 FM еще ближе и доступнее. Скачай бесплатно мобильное приложение и слушай
                    где бы ты не находился! </p>
                <p>
                    <b>в App Store</b>
                </p>
                <a href="https://itunes.apple.com/ru/app/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B5-%D1%80%D0%B0%D0%B4%D0%B8%D0%BE-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0/id1220768618?mt=8">
                    <img src={images.appstore} width={150} alt=""/> </a>
                <p> или
                    <b> Google Play. </b>
                </p>
                <a href="https://play.google.com/store/apps/details?id=ru.xsdk.rusradio"> <img
                    src={images.googleplay} width={150} alt=""/> </a>
            </div>
        </div>
    )
};

export default Application;


