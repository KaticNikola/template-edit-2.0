import React, { Component } from 'react'

import './EditFormController.scss'
export class EditFormController extends Component {
    render() {
        return (
            <div className='controller'>
                <p className="controller-title">
                    Preview
                </p>
                <div className="controller-btn">

                </div>
            </div>
        )
    }
}

export default EditFormController
// kontrolise var iz state > editMode vrednost moze da bude on/off
//neka ovo bude Previiew moda> isto se aktivira i daje ti opciju da kliknes na komp/tablet/phone ikone