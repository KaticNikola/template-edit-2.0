import React, { Component } from 'react'
import Box from './Box'

import { Consumer } from "../../live-edit/template-edit/template-context/TemplateContext";
import { SELECTED_ELEMENT } from '../../live-edit/template-edit/template-context/TemplateTypes'
export class CardList extends Component {

	handleSelectElement = (dispatch, e) => {
		console.log("click from card")
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
		const { boxList } = this.props
		return (
			<Consumer>
				{value => {
					const { dispatch, } = value;
					 const { boxies } = value.boxies
					return (
						<>
							{
								boxList.map((box, index) => {
									return (
										<Box
											id={boxies.id}
											box={box}
											idIndex={index}
											{...boxies}
											/>
									)
								})

							}
						</>

					)
				}}

			</Consumer>
		)
	}
}

export default CardList
