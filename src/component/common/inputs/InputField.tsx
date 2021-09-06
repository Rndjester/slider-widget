import * as React from "react";
import classes from './InputField.module.sass';

const InputField = ({useCaption, value, onChange, onlyNumber}) => {
    if (onlyNumber) {
        const checkNumber = (inputValue) => {

        }
    }
    return (
        <label className={classes.field__label}>
            <input type="text"
                   value={value}
                   onChange={(e) => onChange(e.target.value)}
                   className={classes.field__input}
                   onInput={(e) => {

                   }}
            />
            {useCaption && <span className={"field__label"}></span>}
        </label>
    )
}
export default InputField