import React from "react";
import "./Partners.css"
import rusu from "./alya_rusu.jpg"
import carman from "./carman.jpg"
import saranchuk from "./saranchuk.jpg"

const Partners = () => {
    return (
        <div className="Partners">
            <div className="pre_partners_info_block">
                <h3>Наши партнеры</h3>
            </div>
            <div className="Partners_info_block">
                <img src={saranchuk} height={287} width={350}/>
                <div className="under_the_image">
                    <h4>Иван Саранчук</h4>
                    <p>Иван Саранчук - директор радиостанции "Русское Радио Америка", основатель нескольких клиник в
                        Орегоне. </p>
                </div>
            </div>
            <div className="Partners_info_block">
                <img src={rusu} height={400} width={350}/>
                <div className="under_the_image">
                    <h4>Аля Русу</h4>
                    <p>Аля Русу - кейс-менеджер в Клинике Pro Health Chiropractic Center. Консультант по вопросам
                        пострадавших в автоавариях, получивших травмы на рабочих местах и других происшествиях. Помогает
                        заполнить необходимые документы, ответит на вопросы относительно страховки. Осуществляет
                        мониторинг
                        и корректировку состояния дела клиента, направляет к ведущим специалистам: юристам и врачам.</p>
                </div>
            </div>
            <div className="Partners_info_block">
                <img src={carman} height={350} width={350}/>
                <div className="under_the_image">
                    <h4>Сергей Карман</h4>
                    <p>Сергей Карман - основатель и генеральный директор американской корпорации Ezlogz
                        Inc.Универсальной
                        площадки для управления автопарком и платформой логистики,основанной на технологии
                        блокчейн.Разработанное Сергеем приложение Ezlogz , обеспечивает эффективную связь между
                        водителями ,
                        их семьями,коллегами,владельцами бизнеса,специалистами по безопасности.Помогает решать
                        ежедневные
                        проблемы,возникающие на дороге.Имеет сертифицированный ELD.
                    </p>
                </div>
            </div>
        </div>

    )
};

export default Partners;



