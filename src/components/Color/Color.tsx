import React from 'react'

import {
    addLeftColor,
    addRightColor,
    lockColor,
    removeColor
} from 'store/colorSlice'

import { useAppDispatch } from 'hooks/redux'

import {
    Button,
    ColorStyled,
    IoAddCircleOutlineStyled,
    IoCloseCircleOutlineStyled,
    IoCopyOutlineStyled,
    IoLockClosedOutlineStyled,
    IoLockOpenOutlineStyled
} from './Color.style'
import { ColorProps } from './Color.types'

export const Color: React.FC<ColorProps> = ({
    color,
    textColor,
    isFirst,
    isLast,
    isLocked
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

    const handleLock = () => {
        dispatch(lockColor(color))
    }

    const handleCopy = () => {
        console.log('copy')
        navigator.clipboard.writeText(color)
    }

    return (
        <ColorStyled color={color}>
            {isLocked ? (
                <IoLockClosedOutlineStyled
                    onClick={handleLock}
                    color={textColor}
                />
            ) : (
                <IoLockOpenOutlineStyled
                    onClick={handleLock}
                    color={textColor}
                />
            )}
            <IoCopyOutlineStyled color={textColor} onClick={handleCopy} />
            <IoCloseCircleOutlineStyled
                color={textColor}
                onClick={handleRemove}
            />
            {!isFirst && (
                <IoAddCircleOutlineStyled
                    color={textColor}
                    onClick={handleAddLeft}
                    type='left'
                />
            )}
            {!isLast && (
                <IoAddCircleOutlineStyled
                    color={textColor}
                    onClick={handleAddRight}
                    type='right'
                />
            )}
            <Button color={color} textColor={textColor}>
                {color}
            </Button>
        </ColorStyled>
    )
}
