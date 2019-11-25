
import React from 'react'

const MainTitle = ({
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
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
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
        marginTop,
        marginLeft,
        marginBottom,
        marginRight,
        paddingTop,
        paddingLeft,
        paddingBottom,
        paddingRight,
    }
    return (
        <h1 id={id} name={actionType} style={style} >{content}</h1>
    )
}

export default MainTitle
