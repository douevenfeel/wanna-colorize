import React, { useState } from 'react'

import {
    addLeftColor,
    addRightColor,
    removeColor,
    updateColor
} from 'store/colorSlice'

import { useAppDispatch } from 'hooks/redux'

import {
    Button,
    CiCirclePlusStyled,
    CiCircleRemoveStyled,
    ColorStyled
} from './Color.style'
import { ColorProps } from './Color.types'

export const Color: React.FC<ColorProps> = ({
    color,
    textColor,
    isFirst,
    isLast
}) => {
    const [newColor, setNewColor] = useState(color)
    const dispatch = useAppDispatch()

    const handleRemove = () => {
        dispatch(removeColor(color))
    }

    const handleAddRight = () => {
        dispatch(addRightColor(color))
    }

    const handleAddLeft = () => {
        dispatch(addLeftColor(color))
    }

    const handleColor = () => {
        dispatch(updateColor({ newColor, color }))
    }

    return (
        <ColorStyled color={color} textColor={textColor}>
            <Button color={color} textColor={textColor}>
                {color}
            </Button>
            <input
                type='color'
                value={color}
                onChange={(e) => setNewColor(e.target.value)}
                onBlur={handleColor}
            />
            <CiCircleRemoveStyled color={textColor} onClick={handleRemove} />
            {!isFirst && (
                <CiCirclePlusStyled
                    color={textColor}
                    onClick={handleAddLeft}
                    type='left'
                />
            )}
            {!isLast && (
                <CiCirclePlusStyled
                    color={textColor}
                    onClick={handleAddRight}
                    type='right'
                />
            )}
        </ColorStyled>
    )
}
