import React, { Component } from 'react'

import Icon from '../icon-components/Icon'
import BoxTitle from './BoxTitle'
import BoxDescription from './BoxDescription'

import {  Consumer} from '../../live-edit/template-edit/template-context/TemplateContext'

import { SELECTED_ELEMENT } from '../../live-edit/template-edit/template-context/TemplateTypes';

export class Box extends Component {

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
		const { box, idIndex } = this.props;
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
						<div className="boxies-card"
							id={id}
							name={actionType}
							style={style}>
							<div className='boxies-card_icon'>
								<Icon {...box.icon} />
							</div>
							<div className="boxies-card_title"
								onClick={this.handleSelectElement.bind(this, dispatch)}>
									{/* probaj da koristis card title ili napravi novi box title */}
								<BoxTitle idIndex={idIndex} {...box.title} />
							</div>
							<div className="boxies-card_descripiton"
								onClick={this.handleSelectElement.bind(this, dispatch)}>
								<BoxDescription {...box.description} idIndex={idIndex} />
							</div>
						</div >
					)
				}}
			</Consumer>

		)
	}
}

export default Box
