import React, { useState, useCallback, FC } from "react";
import RangeSlider from "../common/rangeSlider";
import InputField from "../common/inputs";
import classes from "./Widget.module.sass";

interface Props {
    /**
     * Изначальное значение.
     * По умолчанию: 0
     */
    initValue?: number;
    /**
     * Шаг....
     * По умолчанию: 10
     */
    step?: number;
    /**
     * Минимальное значение
     * По умолчанию: 0
     */
    min?: number;
    /**
     * Максимальное значение
     * По умолчанию: 100
     */
    max?: number;
}

const Widget: FC<Props> = ({
                               initValue = 0,
                               step = 1,
                               min = 0,
                               max = 100,
                           }) => {

    const [value, setValue] = useState(initValue);

    const onChange = useCallback(
        (newValue: number) => {
            if (value !== newValue) {
                if (newValue > max) {
                    setValue(max);
                } else if (newValue < min) {
                    setValue(min);
                } else {
                    setValue(newValue);
                }
            }
        },
        [setValue, value]
    );
    return (
        <div className={classes.widget}>
            <InputField
                value={value}
                onChange={onChange}
                useCaption={false}
                onlyNumber={false}
                type = {'number'} />
            <RangeSlider
                value={value}
                min={min}
                step={step}
                max={max}
                onChange={onChange}
            />
        </div>
    );
};

export default Widget;
