/* На заметку */
import React from "react";
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import "./Note.css"
import casting from "./image/casting.jpg"
import logo from "./image/logo.png"

const Note = () => {
    return (
        <div className="common_block note">
            <div className="pre_indoor_block pre_note_block">
                <h3>На заметку</h3>
            </div>
            <div className="indoor_block note_block">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frusskoeradioamerica%2F&amp;tabs=timeline&amp;width=350&amp;height=550&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
                    width="350" height="550" scrolling="no" frameBorder="0"
                    allowTransparency="true">
                </iframe>
                <div className="down_note_block"></div>
            </div>
            <div className="indoor_block note_block">
                <img src={casting} height={196} width={350}/>
                <p>
                    Русское радио Америка приглашает талантливых авторов и исполнителей принять участие в проекте
                    "Музыкальная гонка"!
                    <br/>
                    Если ты хорошо поёшь, у тебя есть собственная песня на русском языке и ты проживаешь на
                    территории
                    Портленда, Ванкувера и близлежащих городов, то до 15 декабря сделай следующее:
                    <br/>
                    1) Пришли одну демо запись (можно ссылкой для скачивания) или текст песни на
                    info@rusradio.fm с
                    указанием обратной связи : фамилии, имени, возраста, номера телефона, электронной почты и
                    места
                    проживания.
                    <br/>
                    2) Выкладывай в комментарии к этой теме ссылку на песню или текст.
                    <br/>
                    ВАЖНО!
                    <br/>
                    Один человек может прислать и выложить только ОДНУ песню или текст.
                    <br/>
                    И, возможно, именно ты станешь победителем, запишешь свою песню в
                    профессиональной студии и получишь
                    годовую ротацию в эфире Русского радио Америка!
                    <br/>
                    Автор лучшего текста будет награжден денежным сертификатом!
                    <br/>
                    Имена победителей будут объявлены 20 декабря!
                </p>
                <div className="down_note_block"></div>
            </div>
            <div className="indoor_block note_block">
                <img src={logo} width={350} height={76}/>
                <p>
                    <b>РАСПИСАНИЕ</b><br/>
                    <b>Понедельник - Четверг</b><br/>
                    07:00 - 18:00 Новости в начале часа <br/>
                    07:00 - 11:00 Вячеслав Воронков <br/>
                    11:00 - 15:00 Таня Ларина <br/>
                    15:00 - 19:00 Эд Рокмэн<br/>
                    <b>Пятница</b> <br/>
                    07:00 - 18:00 Новости в начале часа <br/>
                    07:00 - 11:00 Вячеслав Воронков <br/>
                    11:00 - 15:00 Таня Ларина <br/>
                    08:20, 10:20, 15:20, 17:20 Кратко о полезном (Алексей Соломонов) <br/>
                    15:00 - 19:00 Эд Рокмэн <br/>
                    <b>Суббота</b> <br/>
                    09:00 - 13:00 Андрей Титов <br/>
                    10:20, 12:20, 14:20, 16:20 Кратко о полезном (Алексей Соломонов) <br/>
                    13:00 - 17:00 Дарья Мельникова <br/>
                    <b>Воскресенье</b> <br/>
                    09:00 - 13:00 Андрей Титов <br/>
                    13:00 - 17:00 Дарья Мельникова <br/>
                </p>
                <div className="down_note_block"></div>
            </div>
        </div>
    )
};

export default Note;