import React from 'react'

const BoxDescription = ({
    idIndex,
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,
    lineHeight,
    letterSpacing
}) => {
    const style = {
        fontSize,
        fontType,
        fontWeight,
        color,
        textTransform,
        fontStyle,
        textAlign,
        textDecoration,
        lineHeight,
        letterSpacing
    }
    return (
        <p id={`boxiesBox${idIndex}Description`} style={style}>{content}</p>
    )
}

export default BoxDescription

