
import React from 'react'

const Icon = ({
    icon,
    fontSize,
    color,
    textAlign,
    id,
}) => {
    const style = {
        fontSize,
        color,
        textAlign,
    }
    return (
        <i style={style} className={icon} id={id} />
    )
}

export default Icon

