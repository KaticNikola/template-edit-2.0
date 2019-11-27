import React, { Component } from 'react'
import EdutMenu from '../edit-menu/EditMenu'

import TestGameSection from '../../games/TestGameSection'

import './TemplateEdit.scss'


//treba da renderuje edit meni i template
export default class TemplateEdit extends Component {
    render() {
        return (
            <div className='templatEdit'>
               <div className="templatEdit-editMenu">
                    <EdutMenu/>
               </div>
               <div className="templatEdit-template">
                    <TestGameSection/>
               </div>
               
               
            </div>
        )
    }
}
