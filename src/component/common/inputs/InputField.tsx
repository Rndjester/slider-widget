import * as React from "react";
import classes from './field.module.sass';

const InputField = ({useCaption, value, onChange}) => {
    return (
        <label className={classes.field__label}>
            <input type="text" value = {value} onChange = {(e) => onChange(e.target.value)} className={classes.field__input}/>
            {useCaption && <span className={"field__label"}></span>}
        </label>
    )
}
export default InputField