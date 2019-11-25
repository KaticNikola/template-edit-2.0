
import React from 'react'

const Button = ({
    id, 
    actionType,
    //bg styles
    background,
    border,
    borderThiknes,
    borderType,
    borderColor,
    borderRadius,

    //contentn i fonts 
    content,
    fontSize,
    fontType,
    fontWeight,
    color,
    textTransform,
    fontStyle,
    textAlign,
    textDecoration,

    //box shadoww
    boxShadowColor,
    boxShadowBlurRadius,
    boxShadowSpreadRadius,
    boxShadowHorizontal,
    boxShadowVertical,

    //Hover
    // hover:{ color: HC}
    hoverBackground,
    hoverBorder,
    hoverBorderThiknes,
    hoverBorderType,
    hoverBorderColor,
    hoverBorderRadius,

    //contentn i fonts 
    hoverContent,
    hoverFontSize,
    hoverFontType,
    hoverFontWeight,
    hoverColor,
    hoverTextTransform,
    hoverFontStyle,
    hoverTextAlign,
    hoverTextDecoration,

    //box shadoww
    hoverBoxShadowColor,
    hoverBoxShadowBlurRadius,
    hoverBoxShadowSpreadRadius,
    hoverBoxShadowHorizontal,
    hoverBoxShadowVertical,
    


}) => {
    const style = {
        //bg color
        background,
        //border
        // border,
        borderWidth: borderThiknes,
        borderColor,
        border,

        borderRadius: `${borderRadius}px`,
        //fonts and content
        fontSize,
        fontType: fontType,
        fontWeight: fontWeight,
        color: color,
        textTransform: textTransform,
        fontStyle: fontStyle,
        textAlign: textAlign,
        textDecoration: textDecoration,
        //box shadow
        boxShadow: `${boxShadowHorizontal} ${boxShadowVertical} ${boxShadowBlurRadius} ${boxShadowSpreadRadius} ${boxShadowColor}`,

        ":hover":{
            
        }


    }

    return (
        <button id={id} name={actionType} style={style} >{content}</button>
    )
}

export default Button

