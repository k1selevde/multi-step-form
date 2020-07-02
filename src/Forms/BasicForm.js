import React from 'react'
import {Field, reduxForm} from "redux-form";
import RenderField from '../ui/RenderField/RenderField'
import {maxLengthCreator, required} from "../utils/validators";


/*class MyCustomInput extends React.Component {
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
}*/


const maxLength30 = maxLengthCreator(30)


class BasicForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {handleSubmit,reset} = this.props;


        return (
            <div className="form__wrap">
                <form
                    onSubmit={handleSubmit}
                >
                    <Field
                        name="username"
                        component={RenderField}
                        id="username"
                        inputClass="inputWrap"
                        label="Имя пользователя"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <Field
                        name="email"
                        component={RenderField}
                        id="email"
                        inputClass="inputWrap"
                        label="Введите email"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <Field
                        name="password"
                        component={RenderField}
                        id="password"
                        inputClass="inputWrap"
                        label="Введите пароль"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <Field
                        name="repeatPassword"
                        component={RenderField}
                        id="repeatPassword"
                        inputClass="inputWrap"
                        label="Повторите пароль"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

const newForm = reduxForm({
    form: 'basic',
    enableReinitialize: true,
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true
})(BasicForm);

export default newForm;