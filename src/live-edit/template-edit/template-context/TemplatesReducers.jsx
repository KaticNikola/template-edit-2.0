//ovde ode prebacu sve reducers nije povezano sa context 


import {
	EDIT_HEADER_TITILE,
	EDIT_HEADER_DESCRIPTION,
	EDIT_HEADER_BUTTON_LEFT,
	EDIT_HEADER_BUTTON_RIGHT,

	EDIT_OFFERS_TITILE,
	EDIT_OFFERS_CARDS,
	EDIT_OFFERS_CARD1_TITILE,
	EDIT_OFFERS_CARD1_DESCRIPTION,
	EDIT_OFFERS_CARD1_BUTTON,
	EDIT_OFFERS_CARD2_TITILE,
	EDIT_OFFERS_CARD2_DESCRIPTION,
	EDIT_OFFERS_CARD2_BUTTON,
	EDIT_OFFERS_CARD3_TITILE,
	EDIT_OFFERS_CARD3_DESCRIPTION,
	EDIT_OFFERS_CARD3_BUTTON,
	EDIT_OFFERS_CARD4_TITILE,
	EDIT_OFFERS_CARD4_DESCRIPTION,
	EDIT_OFFERS_CARD4_BUTTON,

	EDIT_BOXIES_TITILE,
	EDIT_BOXIES_DESCRIPTION,
	EDIT_BOXIES_BUTTON,
	EDIT_BOXIES_BOX1_TITILE,
	EDIT_BOXIES_BOX1_DESCRIPTION,
	EDIT_BOXIES_BOX2_TITILE,
	EDIT_BOXIES_BOX2_DESCRIPTION,
	EDIT_BOXIES_BOX3_TITILE,
	EDIT_BOXIES_BOX3_DESCRIPTION,
	EDIT_BOXIES_BOX4_TITILE,
	EDIT_BOXIES_BOX4_DESCRIPTION,
	EDIT_BOXIES_BOX5_TITILE,
	EDIT_BOXIES_BOX5_DESCRIPTION,
	EDIT_BOXIES_BOX6_TITILE,
	EDIT_BOXIES_BOX6_DESCRIPTION,
	EDIT_BOXIES_BOX7_TITILE,
	EDIT_BOXIES_BOX7_DESCRIPTION,
	EDIT_BOXIES_BOX8_TITILE,
	EDIT_BOXIES_BOX8_DESCRIPTION,


	EDIT_CONTACT_TITILE,
	EDIT_CONTACT_BUTTON,

	EDIT_GET_STARTED_TITILE,
	EDIT_GET_STARTED_DESCRIPTION,
	EDIT_GET_STARTED_BUTTON,

	EDIT_FOOTER_TITILE,
	EDIT_FOOTER_DESCRIPTION,




	SELECTED_ELEMENT,
	EDITMODE_CONTROLER,
	PREVIEW_SIZE

} from './TemplateTypes';

const reducer = (state, action) => {
	switch (action.type) {
		//HEADER
		case EDIT_HEADER_TITILE:
			return {
				...state.header.title,
				title: [state.header.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_DESCRIPTION:
			return {
				...state.header.description,
				description: [state.header.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_BUTTON_LEFT:
			return {
				...state.header.buttonLeft,
				btnLeft: [state.header.buttonLeft].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_BUTTON_RIGHT:
			return {
				...state.header.buttonRight,
				btnRight: [state.header.buttonRight].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//OFFERS
		case EDIT_OFFERS_TITILE:
			return {
				...state.offers.title,
				title: [state.offers.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
			// cards 
		case EDIT_OFFERS_CARDS:
			return {
				...state.offers.cards,
				cards: [state.offers.cards].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//card 1
		case EDIT_OFFERS_CARD1_TITILE:
			return {
				...state.offers.cardList[0].title,
				title: [state.offers.cardList[0].title].map(key => {
					console.log(` from context payload ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_OFFERS_CARD1_DESCRIPTION:
			return {
				...state.offers.cardList[0].description,
				title: [state.offers.cardList[0].description].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD1_BUTTON:
			return {
				...state.offers.cardList[0].button,
				title: [state.offers.cardList[0].button].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//card2
		case EDIT_OFFERS_CARD2_TITILE:
			return {
				...state.offers.cardList[1].title,
				title: [state.offers.cardList[1].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD2_DESCRIPTION:
			return {
				...state.offers.cardList[1].description,
				title: [state.offers.cardList[1].description].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD2_BUTTON:
			return {
				...state.offers.cardList[1].button,
				title: [state.offers.cardList[1].button].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//card3
		case EDIT_OFFERS_CARD3_TITILE:
			return {
				...state.offers.cardList[2].title,
				title: [state.offers.cardList[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD3_DESCRIPTION:
			return {
				...state.offers.cardList[2].description,
				title: [state.offers.cardList[2].description].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD3_BUTTON:
			return {
				...state.offers.cardList[2].button,
				title: [state.offers.cardList[2].button].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//card4
		case EDIT_OFFERS_CARD4_TITILE:
			return {
				...state.offers.cardList[3].title,
				title: [state.offers.cardList[3].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD4_DESCRIPTION:
			return {
				...state.offers.cardList[3].description,
				title: [state.offers.cardList[3].description].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_OFFERS_CARD4_BUTTON:
			return {
				...state.offers.cardList[3].button,
				title: [state.offers.cardList[3].button].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}



		//BOXIES
		case EDIT_BOXIES_TITILE:
			return {
				...state.boxies.title,
				title: [state.boxies.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_BOXIES_DESCRIPTION:
			return {
				...state.boxies.description,
				description: [state.boxies.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_BOXIES_BUTTON:
			return {
				...state.boxies.button,
				btn: [state.boxies.button].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX1_TITILE:
			return {
				...state.boxies.boxList[0].title,
				title: [state.boxies.boxList[0].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX1_DESCRIPTION:
			return {
				...state.boxies.boxList[0].description,
				description: [state.boxies.boxList[0].description].map(key => {
					console.log(`reducer box1 description ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX2_TITILE:
			return {
				...state.boxies.boxList[1].title,
				title: [state.boxies.boxList[1].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX2_DESCRIPTION:
			return {
				...state.boxies.boxList[1].description,
				description: [state.boxies.boxList[1].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX3_TITILE:
			return {
				...state.boxies.boxList[2].title,
				title: [state.boxies.boxList[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX3_DESCRIPTION:
			return {
				...state.boxies.boxList[2].description,
				description: [state.boxies.boxList[2].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_BOXIES_BOX4_TITILE:
			return {
				...state.boxies.boxList[3].title,
				title: [state.boxies.boxList[3].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX4_DESCRIPTION:
			return {
				...state.boxies.boxList[3].description,
				description: [state.boxies.boxList[3].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX5_TITILE:
			return {
				...state.boxies.boxList[4].title,
				title: [state.boxies.boxList[4].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX5_DESCRIPTION:
			return {
				...state.boxies.boxList[4].description,
				description: [state.boxies.boxList[4].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}


		case EDIT_BOXIES_BOX6_TITILE:
			return {
				...state.boxies.boxList[5].title,
				title: [state.boxies.boxList[5].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX6_DESCRIPTION:
			return {
				...state.boxies.boxList[5].description,
				description: [state.boxies.boxList[5].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX7_TITILE:
			return {
				...state.boxies.boxList[6].title,
				title: [state.boxies.boxList[6].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX7_DESCRIPTION:
			return {
				...state.boxies.boxList[6].description,
				description: [state.boxies.boxList[6].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_BOXIES_BOX8_TITILE:
			return {
				...state.boxies.boxList[7].title,
				title: [state.boxies.boxList[7].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_BOXIES_BOX8_DESCRIPTION:
			return {
				...state.boxies.boxList[7].description,
				description: [state.boxies.boxList[7].description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}






		//CONTACT
		case EDIT_CONTACT_TITILE:
			return {
				...state.contact.title,
				title: [state.contact.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_CONTACT_BUTTON:
			return {
				...state.contact.button,
				btn: [state.contact.button].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		//GET STARTDED
		case EDIT_GET_STARTED_TITILE:
			return {
				...state.getStarted.title,
				title: [state.getStarted.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_GET_STARTED_DESCRIPTION:
			return {
				...state.getStarted.description,
				description: [state.getStarted.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_GET_STARTED_BUTTON:
			return {
				...state.getStarted.button,
				btn: [state.getStarted.button].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//FOOTER
		case EDIT_FOOTER_TITILE:
			return {
				...state.footer.title,
				title: [state.footer.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_FOOTER_DESCRIPTION:
			return {
				...state.footer.title,
				description: [state.footer.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}



		case SELECTED_ELEMENT:
			return {
				...state,
				// selectionKey: state.selectionKey = action.payload.id,
				selectedElement: state.selectedElement = action.payload.id
			}
		case EDITMODE_CONTROLER:
			return {
				...state,
				// selectionKey: state.selectionKey = action.payload.id,
				editMode: state.editMode = action.payload
			}
		case PREVIEW_SIZE:
			return {
				...state,
				previewSize: state.previewSize = action.payload
			}
		default:
			return state;
	}
}

export default reducer;