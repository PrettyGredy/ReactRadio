/* Дидшеи */
import React from "react";
import "./DJ.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
    render() {
        return (
            <div className="DJ">
            <Slider
                infinite={true}
                dots={true}
                speed={1100}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={100}
            >
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
                </div>
        );
    }
}

export default SimpleSlider;



