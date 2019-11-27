import React, { Component } from 'react'
import { Consumer} from '../live-edit/template-edit/template-context/TemplateContext'

import SecondaryTitle from '../components/text-components/SecondaryTitle'
import Description from '../components/text-components/Description'
import Quiz from '../games/quiz/Quiz'

import {SELECTED_ELEMENT} from '../live-edit/template-edit/template-context/TemplateTypes'
import './TestGameSection.scss'

export class TestGameSection extends Component {

    handleSelectElement = (dispatch, e) => {
        let id = e.target.id
        let actionType = e.target.name
        //
        console.log(id)
        console.log(actionType)
        dispatch({
            type: SELECTED_ELEMENT,
            payload: {
                id,
                // selectionKey
            }
        })
    }

    render() {

        return (
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    const { title, description } = value.game;
                    return(
                        <div className="gameSection">
                            <div 
                                className="gameSection-title"
                                onClick={this.handleSelectElement.bind(this, dispatch)}>
                                <SecondaryTitle {...title}/>
                            </div>
                            <div 
                                className="gameSection-description"
                                onClick={this.handleSelectElement.bind(this, dispatch)}>
                                <Description {...description}/>
                            </div>
                            <div className="gameSection-game">
                                <Quiz/>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default TestGameSection
