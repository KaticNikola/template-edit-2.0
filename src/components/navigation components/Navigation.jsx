//sadrzi i renderuje sce iteme za navigaciju 
//da li da renderuije i polje za title/logo
//class colponent i iz nje menjas state itema

import React, { Component } from 'react'
import { Consumer } from '../../live-edit/template-edit/template-context/TemplateContext'
import NavigationLink from './NavigationLink'

import { SELECTED_ELEMENT } from '../../live-edit/template-edit/template-context/TemplateTypes'

export class Navigation extends Component {

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
        const { navigationItems, classname } = this.props;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            {navigationItems.map((item, index) => {
                                return (
                                    <li className={classname}
                                    onClick={this.handleSelectElement.bind(this, dispatch)}>
                                        <NavigationLink key={item.id} {...item}  idIndex={index}/>
                                    </li>
                                )
                            })}
                        </React.Fragment>
                    )
                }}

            </Consumer>


        )

    }
}

export default Navigation
