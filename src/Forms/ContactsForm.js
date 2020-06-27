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


class ContactsForm extends React.Component {
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
                        name="firstName"
                        component={RenderField}
                        id="firstName"
                        inputClass="inputWrap"
                        label="Имя пользователя"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <Field
                        name="LastName"
                        component={RenderField}
                        id="LastName"
                        inputClass="inputWrap"
                        label="Фамилия пользователя"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                    <Field
                        name="phone"
                        component={RenderField}
                        id="phone"
                        inputClass="inputWrap"
                        label="Номер телефона"
                        validate={[required,maxLength30]}
                        type="phone"
                    />
                    <Field
                        name="address"
                        component={RenderField}
                        id="address"
                        inputClass="inputWrap"
                        label="Адресс"
                        validate={[required,maxLength30]}
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

const newForm = reduxForm({
    form: 'contacts'
})(ContactsForm);

export default newForm;