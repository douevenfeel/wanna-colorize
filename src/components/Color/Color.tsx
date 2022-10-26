import React from 'react'

import { addLeftColor, addRightColor, removeColor } from 'store/colorSlice'

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

    return (
        <ColorStyled color={color} textColor={textColor}>
            <Button color={color} textColor={textColor}>
                {color}
            </Button>
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
