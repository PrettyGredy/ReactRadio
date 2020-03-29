import React from "react";
import "./Header.css"
import images from "./image"

const Header = () => {
    return (
        <div className="Header">
            <div className="nav-brand">
                <div>
                    <img src={images.logo} width={180} height={45}/>
                </div>
                <div>
                    <a id="trackname">Grigoriy Leps - Samiy luchshiy deni
                    </a>
                </div>
                <div>
                    <img src={images.play_button} alt="" width={45} height={48}/>
                </div>
                <div>
                    <input type="range" value="80"/>
                </div>
            </div>
            <div className="classy-menu">
                <div>
                    <a href="#statistic">Статистика</a>
                </div>
                <div>
                    <a href="#partners">Партнеры</a>
                </div>
                <div>
                    <a href="#djs">Диджеи</a>
                </div>
                <div>
                    <a href="#news">Новости</a>
                </div>
                <div>
                    <a href="#Contact">Контакты</a>
                </div>
            </div>
        </div>
)
};

export default Header;
