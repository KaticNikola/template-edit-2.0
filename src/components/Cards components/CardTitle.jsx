
import React from 'react'

const CardTitle = ({
    idIndex,
    actionType,
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
}) => {
    const style = {
        fontSize,
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        lineHeight: lineHeight,

    }
    return (
        <h2 id={`offersCard${idIndex}Title`} name={actionType} style={ style }>{content}</h2>
    )
}

export default CardTitle

