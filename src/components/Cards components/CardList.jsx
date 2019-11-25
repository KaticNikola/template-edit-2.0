import React, { Component } from 'react'
import Card from './Card'

import { Consumer } from "../../live-edit/template-edit/template-context/TemplateContext";
import { SELECTED_ELEMENT } from '../../live-edit/template-edit/template-context/TemplateTypes'
export class CardList extends Component {

	// handleSelectElement = (dispatch, e) => {
	// 	console.log("click from card")
	// 	let id = e.target.id
	// 	let actionType = e.target.name
	// 	//
	// 	console.log(id)
	// 	console.log(actionType)
	// 	dispatch({
	// 		type: SELECTED_ELEMENT,
	// 		payload: {
	// 			id,
	// 			// selectionKey
	// 		}
	// 	})
	// }

	render() {
		const { cardList } = this.props
		return (
			<Consumer>
				{value => {
					// const { dispatch, } = value;
					//cards je style koji user dodaje
					const { cards } = value.offers
					return (
						<>
							{
								cardList.map((card, index) => {
									return (
										<Card
											id={cards.id}
											card={card}
											idIndex={index}
											{...cards}
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
