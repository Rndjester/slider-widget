import * as React from "react";
import classes from './InputField.module.sass';
import {FC} from "react";

interface Props {
    /**
     * Флаг для включения подписи инпута.
     * По умолчанию: false
     */
    useCaption?: boolean
    /**
     * Значение в input.
     * По умолчанию: 0
     */
    value?: number;
    /**
     * Функция обновления значения при изменении
     */
    onChange?: (newValue: number) => void;
    /**
     * Флаг для включения фильтра строки.
     * По умолчанию: false
     */
    onlyNumber?: boolean
}
const InputField: FC<Props> = ({
                                    useCaption = false,
                                    value = 0,
                                    onChange,
                                    onlyNumber = false
                                }) => {
    const checkTypeOfValue = (str: string,
                              onlyNumber: boolean,
                              onChange) => {
        if (onlyNumber) {
            const newStr  = str.replace(/[^.\d]+/g,"")
            if (newStr !== "") {
                console.log(newStr)
                const numberValue: number = parseFloat(newStr)
                onChange(numberValue)
            }
            else (onChange(''))
        }
    }
    return (
        <label className={classes.field__label}>
            <input type="text"
                   value={value}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkTypeOfValue(e.target.value, onlyNumber, onChange)}
                   className={classes.field__input}

            />
            {useCaption && <span className={"field__label"}></span>}
        </label>
    )
}
export default InputField