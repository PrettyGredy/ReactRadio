import React from "react";
import "./Header.css"
import "./logo.png"

const Header = () => {
    return (
        <div className="Header">
            <div className="nav-brand">
                <img alt="Logo" src="Component/logo.png" width={200} height={50}/>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div></div>
            <div className="classy-menu">
                <div>Статистика</div>
                <div>Партнеры</div>
                <div>Диджеи</div>
                <div>Новости</div>
                <div>Контакты</div>
            </div>
        </div>
    )
};

export default Header;
