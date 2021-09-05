import React, { useState, useCallback, FC } from "react";
import DefaultRangeSlider from "../common/range-slider/defaultRangeSlider";
import InputField from "../common/inputs/InputField";
import classes from "./widget.module.sass";

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
                               step = 10,
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
            <InputField value={value} onChange={onChange} useCaption={false} onlyNumber={true} />
            <DefaultRangeSlider
                value={value}
                initMin={min}
                step={step}
                initMax={max}
                onChange={onChange}
            />
        </div>
    );
};

export default Widget;
