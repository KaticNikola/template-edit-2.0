import React from 'react'

const CardDescription = ({
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
        <p id={`offersCard${idIndex}Description`} style={style}>{content}</p>
    )
}

export default CardDescription

