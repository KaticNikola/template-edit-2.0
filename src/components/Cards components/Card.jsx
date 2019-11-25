import React, { Component } from 'react'

import Icon from '../icon-components/Icon'
import CardTitile from './CardTitle'
import CardTDescription from './CardDescription'
import CardButton from './CardButton';
import { SELECTED_ELEMENT } from '../../live-edit/template-edit/template-context/TemplateTypes'

import { Consumer } from '../../live-edit/template-edit/template-context/TemplateContext';

export class Card extends Component {

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
		const { card, idIndex } = this.props;
		//	cards je odvojen obj iz state koji je vezan za sve cards comonente
		const { id, actionType, background, borderThickness, borderColor, border, borderType, borderRadius, boxShadowColor, boxShadowBlur,
			boxShadowSpread,
			boxShadowHorizontal,
			boxShadowVertical, } = this.props;
			
		const style = {
			background,
			borderThickness,
			border,
			borderColor,
			borderType,
			borderRadius,

			boxShadowColor,
			boxShadowBlur,
			boxShadowSpread,
			boxShadowHorizontal,
			boxShadowVertical,
		}
		return (
			<Consumer>
				{value => {
					const { dispatch, } = value;
					return (
						<div className="card column23"
							id={id}
							name={actionType}
							style={style}>
							<div className='card-icon'>
								<Icon {...card.icon} />
							</div>
							<div className="card-title"
								onClick={this.handleSelectElement.bind(this, dispatch)}>
								<CardTitile idIndex={idIndex} {...card.title} />
							</div>
							<div className="card-description"
								onClick={this.handleSelectElement.bind(this, dispatch)}>
								<CardTDescription {...card.description} idIndex={idIndex} />
							</div>
							<div className="card-btn btn-text"
								onClick={this.handleSelectElement.bind(this, dispatch)}>
								< CardButton {...card.button} idIndex={idIndex} />
							</div>
						</div >
					)
				}}
			</Consumer>

		)
	}
}

export default Card
