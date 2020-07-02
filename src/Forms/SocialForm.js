import React from 'react'
import {Field, reduxForm} from 'redux-form'
import RenderField from "../ui/RenderField/RenderField";
import {required} from "../utils/validators";

class SocialForm extends React.Component {
    render() {
        const {handleSubmit,reset} = this.props;
        return(
            <div className="form__wrap">
                <form onSubmit={handleSubmit}>
                    <Field
                        name="facebook"
                        component={RenderField}
                        id="facebook"
                        inputClass="inputWrap"
                        label="FACEBOOK"
                        validate={[required]}
                        type="text"
                    />
                    <Field
                        name="vkontakte"
                        component={RenderField}
                        id="vk"
                        inputClass="inputWrap"
                        label="VKONTAKTE"
                        validate={[required]}
                        type="text"
                    />
                    <Field
                        name="twitter"
                        component={RenderField}
                        id="twitter"
                        inputClass="inputWrap"
                        label="TWITTER"
                        validate={[required]}
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

const newForm = reduxForm({
    form: 'social',
    enableReinitialize: true,
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true
})(SocialForm)

export default newForm;