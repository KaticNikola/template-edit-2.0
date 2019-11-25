import React, { Component } from 'react'

import EditFormController from '../edit-menu/edit-forms-controller/EditFormController'
import FormPicker from './edit-forms/form-picker/FormPicker'
import PreviewSize from './preview-size/PreviewSize'

import './EditMenu.scss'

export class EditMenu extends Component {
    render() {
        return (
            <div className='editMenu'>
                <div className="editMenu-controler">
                    <EditFormController/>
                </div>
                <div className="editMenu-formPicker">
                   <FormPicker/>
                </div>
                <div className="editMenu-previewSize">
                    <PreviewSize/>
                </div>
            </div>
        )
    }
}

export default EditMenu
