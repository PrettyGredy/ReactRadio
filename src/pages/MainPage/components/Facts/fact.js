import React from "react";
import "/React/ProgektRadio/my-app/src/pages/MainPage/MainPageStyles.css"
import "./Facts.css"
import PropTypes from "prop-types"

export default function Fact ({className, image, count, title}) {
    return (
        <div className="indoor_block facts_block">
            <img src={image} height={127} width={127}/>
            <h2><span className="counter">{count}</span></h2>
            <h5>{title}</h5>
        </div>
    )
}

Fact.defaultProps = {
    className: '',
}

Fact.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
}