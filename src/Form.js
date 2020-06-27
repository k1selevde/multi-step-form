import React from 'react'
import {Field, reduxForm} from "redux-form";
import RenderField from './renderField'
import {maxLengthCreator, required} from "./utils/validators";


class MyCustomInput extends React.Component {
    render() {
        const {meta,label,input,...other} = this.props
        return (
            <div className="customInputWrap">
                <label className="customInputLabel">{label}</label>
                {meta.error && <span>{meta.error}</span>}
                <input {...input} {...other} />
            </div>
        )
    }
}


const maxLength30 = maxLengthCreator(30)


class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {handleSubmit,reset} = this.props;


        return (
            <div>
                <form
                    onSubmit={handleSubmit}
                >
                    <Field className="inputBlock" name="title" component="input" type="text"/>
                    <Field name="text" component="input" type="text"/>
                    <Field name="dweesc" component="input" type="text"/>
                    <Field name="org" component="textarea" type="text"/>
                    <Field
                        name="custom"
                        component={MyCustomInput}
                        label="Yerro"
                        placeholder="kocyak"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <div>
                        <button
                            onClick={reset}
                            type="button">Очистить форму
                        </button>
                        <button type="submit">Отправить форму</button>
                    </div>
                </form>
            </div>
        )
    }
}

const newForm = reduxForm({
    form: 'auth'
})(Form);

export default newForm;