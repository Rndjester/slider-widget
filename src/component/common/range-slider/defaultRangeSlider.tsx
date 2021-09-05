import React, {useState} from "react";

import './defaultRangeSlider.sass'

function DefaultRangeSlider({value, initMin, initMax, step, onChange}) {
    return (
        <div className={"default__slider-track"}>
            <input type="range"
                   className={"default__slider"}
                   step = {step}
                   min = {initMin}
                   max = {initMax}
                   value = {value}
                   onChange = {(e) => onChange(e.target.value)}/>
        </div>
    )
}
export default DefaultRangeSlider
