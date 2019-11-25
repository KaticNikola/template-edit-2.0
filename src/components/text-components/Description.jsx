import React from 'react'

const Description = ({
    id,
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
    }
    return (
        <p id={id} style={style}>{content}</p>
    )
}

export default Description

