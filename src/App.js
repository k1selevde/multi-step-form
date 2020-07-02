import React from 'react'
import BasicForm from './Forms/BasicForm'
import {initialize, reset} from 'redux-form'
import {connect} from 'react-redux'
import {decreasePage, incrementPage} from "./reducers/stepsReducer";
import Steps from './Steps'
import cn from 'classnames'
import ContactsForm from "./Forms/ContactsForm";
import AvatarForm from './Forms/AvatarForm'

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
        const {reset, currentPage, pagesName} = this.props;
        var formStep;
        switch (currentPage) {
            case 1:
                formStep = <BasicForm onSubmit={this.handleSubmit}  reset={reset}/>
                break;
            case 2:
                formStep = <ContactsForm onSubmit={this.handleSubmit}  reset={reset}/>
                break;
            case 3:
                formStep =   <AvatarForm onSubmit={this.handleSubmit}  reset={reset}/>
                break;
            default:
                formStep = <BasicForm onSubmit={this.handleSubmit}  reset={reset}/>;
                break;
        }
        return (
            <div className="app__container">
                <Steps pagesName={pagesName} currentPage={currentPage}/>
                <div className="forms__wrap">
                    {formStep}
                </div>
                <div className="controls">
                    <button
                        className={
                            cn("controls__btn",
                                {"controls__btn-hidden": currentPage == 1}
                            )
                        }
                        onClick={this.handlePreviousStep}
                    >
                        PREV
                    </button>
                    <button
                        onClick={this.handleNextStep}
                        className={
                            cn("controls__btn",
                                {"controls__btn-hidden": currentPage == pagesName.length}
                             )
                        }
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
        initializeAuth: (data) => dispatch(initialize('basic',data)),
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