import React from 'react'

const RenderField  = ({
    id,type,value,name,error
                }) => {
    return (
        <div>
            <label htmlFor={id}></label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
            />
            {error && <div>{error}</div>}
        </div>
    );
}

export default RenderField;