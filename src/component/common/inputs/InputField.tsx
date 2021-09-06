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
    /**
     * тип инпута "text" или "number"
     * По умолчанию: "text"
     */
    type?: "text" | "number"
}
const InputField: FC<Props> = ({
                                    useCaption = false,
                                    value = 0,
                                    onChange,
                                    onlyNumber = false,
                                    type = 'text'
                                }) => {
    /**
     * функция проверки на число если выставлен флаг onlyNumber,
     * функция была добавлена до определения типа инпута, я решил ее оставить
     * вдруг потребуются только целые числа без точек
     */
    const checkTypeOfValue = (str: string,
                              onlyNumber: boolean,
                              onChange) => {
        if (onlyNumber) {
            const newStr  = str.replace(/[^.\d]+/g,"")
            if (newStr !== "") {
                const numberValue: number = parseFloat(newStr)
                onChange(numberValue)
            }
            else (onChange(''))
        }
        else {
            onChange(str)
        }
    }

    return (
        <label className={classes.field__label}>

            <input type={type}
                   value={value}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkTypeOfValue(e.target.value, onlyNumber, onChange)}
                   className={classes.field__input}

            />
            {useCaption && <span className={"field__label"}></span>}
        </label>
    )
}
export default InputField