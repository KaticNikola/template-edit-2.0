import React, { Component } from 'react'

export class FormInputField extends Component {
    render() {
        const { type, name, placeholder, onChange, value, label, className, min, max, step, append } = this.props;
        return (

            <div className={className}>
                <label style={!label ? { display: "none" } : { display: "block" }} htmlFor={name}>{label}</label>
                <div style={!append ? { display: "" } : { display: "flex" }}>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        min={min}
                        max={max}
                        step={step}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                    <p className="append" style={!append ? { display: "none" } : { display: "block" }}>
                        {append}
                    </p>
                </div>


            </div>
        )
    }
}

export default FormInputField
