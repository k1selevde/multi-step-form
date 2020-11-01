import React, {useEffect} from 'react'
import {connect} from "react-redux";

const FinishBlock  = ({basic = {},contacts = {},social = {}}) => {
    useEffect(() => {
        console.log(` + 1 , ${Object.values(contacts)}`)
        //console.log(`change: social ${Object.keys(social)}, constacts" ${Object.keys(contacts)}`)
    })

    return (
        <div>
            <h4>Ваши данные:</h4>
            <div className="containerInfo">
                <div className="basicInfo">
                    <h3>Basic Info</h3>
                    {Object.values(basic).map(val => (
                        <div>{val}</div>
                    ))}
                </div>
                <div className="contactsInfo">
                    <h3>Contacts Info</h3>
                    {Object.values(contacts).map(val => (
                        <div>{val}</div>
                    ))}
                </div>


                <div className="socialInfo">
                    <h3>Social Info</h3>
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
    contacts: state.form.contacts.valeus,
    social: state.form.social.values
})

export default connect(mapStateToProps)(FinishBlock);