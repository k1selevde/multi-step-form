import React from 'react'
import Form from './Form'
import {initialize, reset} from 'redux-form'
import {connect} from 'react-redux'


class App extends React.Component {
    constructor(props) {
        super(props);
        let {initializeAuth} = this.props;
        initializeAuth({title: 'Hi', text: 'Baroe'})
    }


    // приходит объект где свойства - имена Field'ов формы.
    handleSubmit = (values) => {
        console.log('from app, text Field:', values.text);
    };

    render() {
        const {reset} = this.props
        return (
            <div>
                <div>
                    <h4 style={{color: 'black'}}>My app here</h4>
                </div>
                <div>
                    <Form onSubmit={this.handleSubmit}  reset={reset}/>
                </div>
                <div className="controls">
                    <button
                        className="controls__btn"
                        //onClick={this.incrementPage}
                    >
                        PREV
                    </button>
                    <button

                        className="controls__btn"
                    >
                        NEXT
                    </button>
                </div>
            </div>
        );
    }

}

/*const mapStateToProps = state => ({

})*/

const mapDispatchToProps = dispatch => {
    return ({
        initializeAuth: (data) => dispatch(initialize('auth',data)),
        reset: () => dispatch(reset())
    })
}


export default connect(null,mapDispatchToProps)(App);