import React from "react";
import "./Header.css"
import "./image/logo.png"

const Header = () => {
    return (
        <div className="Header">
            <div className="nav-brand">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
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
