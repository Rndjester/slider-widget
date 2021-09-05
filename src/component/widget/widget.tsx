import React, {useState, useRef, useCallback, useEffect} from "react";
import DefaultRangeSlider from '../common/range-slider/defaultRangeSlider'
import InputField from "../common/inputs/InputField";
import classes from "./widget.module.sass";


const Widget = ({initValue, step, initMin, initMax}) => {
    const [value, setValue] = useState(initValue);

    const onChange = useCallback((newValue: number) => {
        if (value !== newValue) {
            if (newValue > initMax){setValue(initMax);}
            else if (newValue < initMin){setValue(initMin);}
            else {setValue(newValue);}
        }
    }, [setValue, value]);

    return (
        <div className={classes.widget} >
            <InputField value = {value} onChange = {onChange} useCaption={false}/>
            <DefaultRangeSlider value = {value}
                                initMin = {initMin}
                                step = {step}
                                initMax = {initMax}
                                onChange = {onChange}/>
        </div>
    )
}
export default Widget