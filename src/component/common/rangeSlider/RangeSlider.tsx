import React, {FC} from "react";
import classes from './RangeSlider.module.sass'

interface Props {
    /**
     * Значение в input.
     * По умолчанию: 0
     */
    value?: number;
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
    /**
     * Функция обновления значения при изменении
     */
    onChange?: (newValue: number) => void;
}
const RangeSlider: FC<Props> = ({
                               value = 0,
                               step = 10,
                               min = 0,
                               max = 100,
                               onChange
                           }) => {
        return (
            <div className={classes["default__slider-track"]}>
                <input type="range"
                       className={classes.default__slider}
                       step={step}
                       min={min}
                       max={max}
                       value={value}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange?.(parseFloat(e.currentTarget.value))}/>
            </div>
        )
}
export default RangeSlider
