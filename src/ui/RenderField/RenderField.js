import React from 'react'
import s from './RenderField.module.css'

const RenderField  = ({
                          meta,
                          label,
                          id,
                          inputClass,
                          input,
                          ...other
                }) => {
    return (
        <div className={s.inputBox}>
            <input className={s.inputField}
                {...input} {...other}
            />
            <label className={s.label} htmlFor={id}>
                {(meta.error && meta.touched) ? meta.error : label}
            </label>
        </div>
    );
}

export default RenderField;