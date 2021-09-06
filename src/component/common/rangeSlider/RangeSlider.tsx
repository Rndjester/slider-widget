import React from "react";
import './RangeSlider.sass'

function RangeSlider({value, initMin, initMax, step, onChange}) {
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
export default RangeSlider
