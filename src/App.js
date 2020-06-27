import React from 'react'
import BasicForm from './Forms/BasicForm'
import {initialize, reset} from 'redux-form'
import {connect} from 'react-redux'
import {decreasePage, incrementPage} from "./reducers/stepsReducer";
import Steps from './Steps'

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

    handlePreviousStep = () => {
        this.props.decreasePage()
    }

    handleNextStep = () => {
        this.props.incrementPage()
    }

    render() {
        const {reset, currentPage, pagesName} = this.props
        return (
            <div className="app__container">
                <Steps pagesName={pagesName} currentPage={currentPage}/>
                <div className="form__wrap">
                    {currentPage == 1 && <BasicForm onSubmit={this.handleSubmit}  reset={reset}/>}
                </div>
                <div className="controls">
                    <button
                        className="controls__btn"
                        onClick={this.handlePreviousStep}
                        disabled={currentPage == 1}
                    >
                        PREV
                    </button>
                    <button
                        onClick={this.handleNextStep}
                        className="controls__btn"
                        disabled={currentPage == 5}
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
        reset: () => dispatch(reset()),
        incrementPage: () => dispatch(incrementPage()),
        decreasePage: () => dispatch(decreasePage())
    })
}

const mapStateToProps = state => ({
    currentPage: state.steps.currentPage,
    pagesName: state.steps.pagesName
})

export default connect(mapStateToProps,mapDispatchToProps)(App);