
import React from 'react'

const SecondaryTitle = ({
    id,
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
    letterSpacing,
    marignTop,
    marignLeft,
    marignBottom,
    marignRight,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
}) => {
    const style = {
        fontSize,
        fontType,
        fontWeight,
        color: color,
        textTransform,
        fontStyle,
        textAlign,
        textDecoration,
        lineHeight,
        letterSpacing,
        marignTop,
        marignLeft,
        marignBottom,
        marignRight,
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,

    }
    return (
        <h2 id={id} name={actionType} style={style}>{content}</h2>
    )
}

export default SecondaryTitle

