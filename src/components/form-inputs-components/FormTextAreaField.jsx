import React, { Component } from 'react'

export class FormTextAreaField extends Component {

    render() {
        const { name, placeholder, id, cols, rows, value, onChange,cssClass, label } = this.props;
        return (
            <div className={cssClass}>
                <label htmlFor={name}>{label}</label>
                <textarea
                    name={name}
                    id={id}
                    cols={cols}
                    rows={rows}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}>
                </textarea>

            </div>

        )
    }
}

export default FormTextAreaField
