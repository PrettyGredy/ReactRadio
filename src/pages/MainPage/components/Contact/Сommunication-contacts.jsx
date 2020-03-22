/* контакты*/
import React from "react";
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import "./Сommunication-contacts.css"

const Com_con = () => {
    return (
        <div className="common_block com_con">
            <div className="pre_indoor_block pre_com_con_info">
                <h3>Контакты</h3>
            </div>
            <div className="indoor_block com_con_info">
                <iframe width="565" height="400" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=16022%20se%20stark%20st%20portland%20oregon&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
            <div className="indoor_block com_con_info">
                <div>
                    <a href="#" className="blog-headline">
                        <h5>Наш адрес:</h5>
                    </a>
                    <p>16022 SE Stark St Portland, OR 97233 </p>
                    <a href="#" className="blog-headline">
                        <h5>Почтовый ящик:</h5>
                    </a>
                    <p>PO Box 16280 Portland, OR 97292-0280 </p>
                    <a href="#" className="blog-headline">
                        <h5>Телефон студии:</h5>
                    </a>
                    <p>+1 (971) 800-105.5</p>
                    <a href="#" className="blog-headline">
                        <h5>Смс портал:</h5>
                    </a>
                    <p>+1 (971) 770-105.5</p>
                </div>
                <div>
                    <a href="#" className="blog-headline">
                        <h6>По вопросам спонсорства и рекламы обращаться по электронной почте: info@rusradio.fm</h6>
                    </a>
                </div>
            </div>
        </div>
    )
};
export default Com_con;
