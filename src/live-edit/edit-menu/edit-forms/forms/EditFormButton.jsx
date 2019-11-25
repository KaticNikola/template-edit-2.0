import React, { Component } from 'react'
import { Consumer } from '../../../template-edit/template-context/TemplateContext'

import FormTextAreaField from '../../../../components/form-inputs-components/FormTextAreaField'
import FormInputField from '../../../../components/form-inputs-components/FormInputFeld'
import FormSelectField from '../../../../components/form-inputs-components/FormSelectField'

import contentIcon from '../../../../assets/form-edit-icons/content.svg'
import text from '../../../../assets/form-edit-icons/text.svg'
import marginePadding from '../../../../assets/form-edit-icons/margin-padding.svg'
import border from '../../../../assets/form-edit-icons/button border.svg'

import './EditFormText.scss'

class EditFormButton extends Component {
	state = {
		displayedElement: '',//odnosi se na probenu tabova
		// btnState: '',
	}

	//change grp
	handleChageGroup = (e) => {
		console.log(e.target.alt)

		if (e.target.alt === 'content') {
			if (this.state.displayedElement === 'content') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'content'
				})
			}

			//console.log(displayedElement)
		} else if (e.target.alt === 'text') {
			if (this.state.displayedElement === 'text') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'text'
				})
			}
		} else if (e.target.alt === 'MP') {
			if (this.state.displayedElement === 'MP') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'MP'
				})
			}
		}
		else if (e.target.alt === 'border') {
			if (this.state.displayedElement === 'border') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'border'
				})
			}
		}
		else if (e.target.alt === 'background') {
			if (this.state.displayedElement === 'background') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'background'
				})
			}
		}
		else if (e.target.alt === 'shadow') {
			if (this.state.displayedElement === 'shadow') {
				this.setState({
					displayedElement: ''
				})
			} else {
				this.setState({
					displayedElement: 'shadow'
				})
			}
		}
	}
	handleChange = (dispatch, e) => {
		e.preventDefault();

		const property = e.target.name;
		const value = `${e.target.value}`;
		const selectedElement = this.props.selectedElement;
		console.log(`from edit proper ${property}`)
		console.log(`from edit ${value}`)
		console.log(`from edit ${selectedElement}`)


		dispatch({
			type: selectedElement,//selectedElement 
			payload: {
				property,
				value
			}
		})

	}
	render() {
		let { displayedElement } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					const { content, fontSize, letterSpacing,
						marginTop, marginLeft, marginBottom, marginRight,
						paddingTop, paddingLeft, paddingBottom, paddingRight } = this.props.elementToEdit;

					return (
						<div className="formWrapper">
							<div className="formWrapper-tabs">
								<div className="formWrapper-tabs_content"
									onClick={this.handleChageGroup}>
									<img src={contentIcon} alt="content" />
									<p>content</p>
								</div>

								<div className="formWrapper-tabs_style"
									onClick={this.handleChageGroup}>
									<img src={text} alt="text" />
									<p>text style</p>
								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-tabs_advanced">
									<img src={marginePadding} alt="MP" />
									<p>margine</p>
								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-tabs_advanced">
									<img src={border} alt="border" />
									<p>border</p>
								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-tabs_advanced">
									<img src={border} alt="background" />
									<p>background</p>
								</div>
								<div onClick={this.handleChageGroup}
									className="formWrapper-tabs_advanced">
									<img src={border} alt="shadow" />
									<p>shadow</p>
								</div>
							</div>

							<div className="editOptions">
								<form
									onSubmit={this.handleSubmit} className="editOptions-form">

									<div className="editOptions-form_content"
										style={{ display: displayedElement === 'content' ? "block" : "none" }}>
										<FormTextAreaField
											id='px'
											label='Content'
											className="content-field"
											name='content'
											row='40'
											cols='40'
											value={content}
											onChange={this.handleChange.bind(this, dispatch)}
										/>
									</div>

									<div className="editOptions-form_style"
										style={{ display: displayedElement === 'text' ? "block" : "none" }}>
										<FormInputField
											className='style-field'
											label="Font Size"
											type="text"
											name='fontSize'
											append='px'
											value={fontSize}
											onChange={this.handleChange.bind(this, dispatch)}
										/>
										<FormSelectField
											className='style-field'
											label='Font Weight'
											name='fontWeight'
											onChange={this.handleChange.bind(this, dispatch)}
											options={[
												{ value: "100", label: 100 },
												{ value: "300", label: 300 },
												{ value: "400", label: 400 },
												{ value: "500", label: 500 },
												{ value: "600", label: 600 },
												{ value: "700", label: 700 },
												{ value: "800", label: 800 },
												{ value: "900", label: 900 },
											]} />
										<FormSelectField
											className='style-field'
											label='Text Transform'
											name='textTransform'
											onChange={this.handleChange.bind(this, dispatch)}
											options={[
												{ value: "default", label: "Default" },
												{ value: "uppercase", label: "Uppercase" },
												{ value: "lowercase", label: "Lowercase" },
												{ value: "capitalize", label: "Capitalize" },
												{ value: "none", label: "None" },
											]} />

										<FormSelectField
											className='style-field'
											label=' Font Style '
											name='fontSize'
											onChange={this.handleChange.bind(this, dispatch)}
											options={[
												{ value: "default", label: "Default" },
												{ value: "normal", label: "Normal" },
												{ value: "italic", label: "Italic" },
												{ value: "oblique", label: "Oblique" },
												{ value: "none", label: "None" },
											]} />

										<FormSelectField
											className='style-field'
											label='Text Decoration'
											name='textDecoration'
											onChange={this.handleChange.bind(this, dispatch)}
											options={[
												{ value: "default", label: "Default" },
												{ value: "underline", label: "Underline" },
												{ value: "overline", label: "Oveline" },
												{ value: "line-through", label: "Line Throuth" },
												{ value: "underline overline", label: "Underline Overline" },
												{ value: "none", label: "None" },
											]} />
										<FormInputField
											className='style-field'
											label="Letter Spacing"
											type="range"
											name='letterSpacing'
											min="0"
											max="10"
											step='1'
											value={letterSpacing === '' ? 0 : letterSpacing}
											onChange={this.handleChange.bind(this, dispatch)}
										/>
										<p>{letterSpacing === '' ? '0' : letterSpacing}</p>
										<FormInputField
											className='style-field'
											label="Font Color"
											type="color"
											name='color'
											onChange={this.handleChange.bind(this, dispatch)}
										/>
									</div>

									<div className="editOptions-form_advanced"
										style={{ display: displayedElement === 'MP' ? "block" : "none" }}>
										<p className="Margin">Margin</p>
										<div className="marginWrapper">
											<FormInputField
												className='marginWrapper_item'
												label="Top"
												type="text"
												name='marginTop'
												append='px'
												value={marginTop}
												onChange={this.handleChange.bind(this, dispatch)} />

											<FormInputField
												className='marginWrapper_item'
												label="Bottom"
												type="text"
												name='marginBottom'
												append='px'
												value={marginBottom}
												onChange={this.handleChange.bind(this, dispatch)} />

											<FormInputField
												className='marginWrapper_item'
												label="Right"
												type="text"
												name='marginRight'
												append='px'
												value={marginRight}
												onChange={this.handleChange.bind(this, dispatch)} />

											<FormInputField
												className='marginWrapper_item'
												label="Left"
												type="text"
												name='marginLeft'
												append='px'
												value={marginLeft}
												onChange={this.handleChange.bind(this, dispatch)} />
										</div>

										<p className="padding">Padding</p>
										<div className="marginWrapper">
											<FormInputField
												className='marginWrapper_item'
												label="Top"
												type="text"
												name='paddingTop'
												append='px'

												value={paddingTop}
												onChange={this.handleChange.bind(this, dispatch)} />
											<FormInputField
												className='marginWrapper_item'
												label="Bottom"
												type="text"
												name='paddingBottom'
												append='px'
												value={paddingBottom}
												onChange={this.handleChange.bind(this, dispatch)} />
											<FormInputField
												className='marginWrapper_item'
												label="Right"
												type="text"
												name='paddingRight'
												append='px'
												value={paddingRight}
												onChange={this.handleChange.bind(this, dispatch)} />
											<FormInputField
												className='marginWrapper_item'
												label="Left"
												type="text"
												name='paddingLeft'
												append='px'
												value={paddingLeft}
												onChange={this.handleChange.bind(this, dispatch)} />
										</div>

									</div>


									<div className="editOptions-form_content"
										style={{ display: displayedElement === 'border' ? "block" : "none" }}>
										border
									</div>

									<div className="editOptions-form_content"
										style={{ display: displayedElement === 'background' ? "block" : "none" }}>
										background
									</div>

									<div className="editOptions-form_content"
										style={{ display: displayedElement === 'shadow' ? "block" : "none" }}>
										<FormInputField
											className='marginWrapper_item'
											label="horizontal offset"
											type="text"
											name='x'
											append='px'
											value={marginTop}
											onChange={this.handleChange.bind(this, dispatch)} />
										<FormInputField
											className='marginWrapper_item'
											label="vertical offset"
											type="text"
											name='y'
											append='px'
											value={marginTop}
											onChange={this.handleChange.bind(this, dispatch)} />
										<FormInputField
											className='marginWrapper_item'
											label="blur radius"
											type="text"
											name='blur'
											append='px'
											value={marginTop}
											onChange={this.handleChange.bind(this, dispatch)} />
										<FormInputField
											className='marginWrapper_item'
											label=" spread radius"
											type="text"
											name='spread'
											append='px'
											value={marginTop}
											onChange={this.handleChange.bind(this, dispatch)} />
										<FormInputField
											className='style-field'
											label="shadow Color"
											type="color"
											name='color'
											onChange={this.handleChange.bind(this, dispatch)}
										/>

									</div>




								</form>
							</div>
						</div>
					)
				}
				}

			</Consumer >

		)
	}


}

export default EditFormButton