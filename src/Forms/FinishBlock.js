import React, {useEffect} from 'react'
import {connect} from "react-redux";

const FinishBlock  = ({basic = {},contacts = {},social = {}}) => {
    useEffect(() => {
        console.log(`change: social ${Object.keys(social)}, constacts" ${Object.keys(contacts)}`)
    })

    return (
        <div>
            <h4>Ваши данные:</h4>
            <div className="containerInfo">
                <div className="basicInfo">
                    {Object.values(social).map(val => (
                        <div>{val}</div>
                    ))}
                </div>
                <div className="basicInfo">
                    {Object.values(basic).map(val => (
                        <div>{val}</div>
                    ))}
                </div>
                <div className="contactsInfo">
                    {Object.values(contacts).map(val => (
                        <div>{val}</div>
                    ))}
                </div>
                <div className="socialInfo">
                    {Object.values(social).map(val => (
                        <div>{val}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    basic: state.form.basic.values,
    contacts: state.form.contacts.values,
    social: state.form.social.values
})

export default connect(mapStateToProps)(FinishBlock);