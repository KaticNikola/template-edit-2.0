import React, { Component } from 'react'

import { Consumer } from '../../../template-edit/template-context/TemplateContext'
import EditFormText from '../forms/EditFormText'
import EditFormButton from '../forms/EditFormButton'

import './FormPicker.scss'

export class FormPicker extends Component {
	render() {
		let elementToEdit = null;
		//let formTypeControler = null;
		let formTypeControler = "text";//testiras txt formu
		
		return (
			<Consumer>
				{ value => {
					const { selectedElement, editMode } = value;
					if (selectedElement === 'headerTitle') {
						elementToEdit = value.header.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'headerDescription') {
						elementToEdit = value.header.description;
						formTypeControler = 'text'
					} else if (selectedElement === 'headerBtnLeft') {
						elementToEdit = value.header.buttonLeft;
						formTypeControler = 'button'
					}
					else if (selectedElement === 'headerBtnRight') {
						elementToEdit = value.header.buttonRight;
						formTypeControler = 'button'
					}

					//offers
					else if (selectedElement === 'offersTitle') {
						elementToEdit = value.offers.title;
						formTypeControler = 'text'
					}

					//offers cards
					else if (selectedElement === 'offersCards') {
						elementToEdit = value.offers.cards;
						formTypeControler = 'card'
					}

					//card1
					else if (selectedElement === 'offersCards') {
						elementToEdit = value.offers.cards;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard0Description') {
						elementToEdit = value.offers.cardList[0].description;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard0Btn') {
						elementToEdit = value.offers.cardList[0].button;
						formTypeControler = 'button'
					}
					//card2
					else if (selectedElement === 'offersCard1Title') {
						elementToEdit = value.offers.cardList[1].title;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard1Description') {
						elementToEdit = value.offers.cardList[1].description;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard1Btn') {
						elementToEdit = value.offers.cardList[1].button;
						formTypeControler = 'button'
					}
					//card3
					else if (selectedElement === 'offersCard2Title') {
						elementToEdit = value.offers.cardList[2].title;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard2Description') {
						elementToEdit = value.offers.cardList[2].description;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard2Btn') {
						elementToEdit = value.offers.cardList[2].button;
						formTypeControler = 'button'
					}

					//card4
					else if (selectedElement === 'offersCard3Title') {
						elementToEdit = value.offers.cardList[3].title;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard3Description') {
						elementToEdit = value.offers.cardList[3].description;
						formTypeControler = 'text'
					}

					else if (selectedElement === 'offersCard3Btn') {
						elementToEdit = value.offers.cardList[3].button;
						formTypeControler = 'button'
					}


					//boxies
					else if (selectedElement === 'boxiesTitle') {
						elementToEdit = value.boxies.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesDescription') {
						elementToEdit = value.boxies.description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBtn') {
						elementToEdit = value.boxies.button;
						formTypeControler = 'button'
					}
					else if (selectedElement === 'boxiesBox0Title') {
						elementToEdit = value.boxies.boxList[0].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox0Description') {
						elementToEdit = value.boxies.boxList[0].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox1Title') {
						elementToEdit = value.boxies.boxList[1].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox1Description') {
						elementToEdit = value.boxies.boxList[1].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox2Title') {
						elementToEdit = value.boxies.boxList[2].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox2Description') {
						elementToEdit = value.boxies.boxList[2].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox3Title') {
						elementToEdit = value.boxies.boxList[3].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox3Description') {
						elementToEdit = value.boxies.boxList[3].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox4Title') {
						elementToEdit = value.boxies.boxList[4].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox4Description') {
						elementToEdit = value.boxies.boxList[4].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox5Title') {
						elementToEdit = value.boxies.boxList[5].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox5Description') {
						elementToEdit = value.boxies.boxList[5].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox6Title') {
						elementToEdit = value.boxies.boxList[6].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox6Description') {
						elementToEdit = value.boxies.boxList[6].description;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox7Title') {
						elementToEdit = value.boxies.boxList[7].title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'boxiesBox7Description') {
						elementToEdit = value.boxies.boxList[7].description;
						formTypeControler = 'text'
					}


					//contact
					else if (selectedElement === 'contactTitle') {
						elementToEdit = value.contact.title;
						formTypeControler = 'text'
					} else if (selectedElement === 'contactBtn') {
						elementToEdit = value.contact.button;
						formTypeControler = 'button'
					}

					//getstarted
					else if (selectedElement === 'getStartedTitle') {
						elementToEdit = value.getStarted.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'getStartedDescription') {
						elementToEdit = value.getStarted.description;
						formTypeControler = 'text'
					} else if (selectedElement === 'getStartedBtn') {
						elementToEdit = value.getStarted.button;
						formTypeControler = 'button'
					}


					//footer
					else if (selectedElement === 'footerTitle') {
						elementToEdit = value.footer.title;
						formTypeControler = 'text'
					}
					else if (selectedElement === 'footerDescription') {
						elementToEdit = value.footer.description;
						formTypeControler = 'text'
					}


					//render froms
					if (editMode === 'on' && selectedElement === '') {
						return (
							<div className="emptyForm">
								<h3>please select element you want to edit</h3>
							</div>

						)
					} else if (editMode === 'on' && formTypeControler === 'text') {
						return (
							<div className="editMode">
								<EditFormText
									selectedElement={selectedElement}
									elementToEdit={elementToEdit} />
							</div>
						)
					} else if (editMode === 'on' && formTypeControler === 'button') {
						return (
							<div className="editMode">
								<EditFormButton
									selectedElement={selectedElement}
									elementToEdit={elementToEdit} />
							</div>
						)
					}

				}}
			</Consumer>


		)
	}
}

export default FormPicker
//conusmer
//edit forme za razlicite elemnte
//props : ne treba *
//sve dobija iz state
//logika za izbor edit forme 

					
					
				
					// } else if (editMode === 'on' && formTypeControler === 'card') {
					// 	return (
					// 		<div className="editMode">
					// 			<EditFormCards
					// 				selectedElement={selectedElement}
					// 				elementToEdit={elementToEdit} />
					// 		</div>
					// 	)
					// }