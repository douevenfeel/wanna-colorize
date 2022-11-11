import { createSlice } from '@reduxjs/toolkit'
import chroma from 'chroma-js'
import { ColorModel } from 'models/colorModel'

export interface ColorState {
    count: number
    colors: ColorModel[]
}

const initialState: ColorState = {
    count: 5,
    colors: [
        {
            color: String(chroma.random()),
            isLocked: false
        },
        {
            color: String(chroma.random()),
            isLocked: false
        },
        {
            color: String(chroma.random()),
            isLocked: false
        },
        {
            color: String(chroma.random()),
            isLocked: false
        },
        {
            color: String(chroma.random()),
            isLocked: false
        }
    ]
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        reset: (state) => initialState,
        refresh: (state) => {
            console.log('refresh')
            state.colors = state.colors.map((color) => {
                if (color.isLocked) {
                    return color
                } else {
                    return {
                        color: String(chroma.random()),
                        isLocked: false
                    }
                }
            })
        },
        addLeftColor: (state, { payload }) => {
            console.log('addLeftColor')
            if (state.count < 9) {
                const [firstColor] = state.colors.filter(
                    (color) => color.color === payload
                )
                const index = state.colors.indexOf(firstColor)
                const secondColor = state.colors[index - 1]
                const newColor = chroma
                    .mix(firstColor.color, secondColor.color)
                    .hex()
                state.colors = [
                    ...state.colors.slice(0, index),
                    { color: newColor, isLocked: false },
                    ...state.colors.slice(index, state.count)
                ]
                state.count++
            }
        },
        addRightColor: (state, { payload }) => {
            console.log('addRightColor')
            if (state.count < 9) {
                const [firstColor] = state.colors.filter(
                    (color) => color.color === payload
                )
                const index = state.colors.indexOf(firstColor)
                const secondColor = state.colors[index + 1]
                const newColor = chroma
                    .mix(firstColor.color, secondColor.color)
                    .hex()
                state.colors = [
                    ...state.colors.slice(0, index + 1),
                    { color: newColor, isLocked: false },
                    ...state.colors.slice(index + 1, state.count)
                ]
                state.count++
            }
        },
        removeColor: (state, { payload }) => {
            console.log('removeColor')
            state.count -= 1
            state.colors = state.colors.filter(
                (color) => color.color !== payload
            )
        },
        lockColor: (state, { payload }) => {
            console.log('lockColor')
            const [currentColor] = state.colors.filter(
                (color) => color.color === payload
            )
            const currentColorIndex = state.colors.indexOf(currentColor)
            state.colors[currentColorIndex] = {
                color: currentColor.color,
                isLocked: !currentColor.isLocked
            }
        }
    }
})

export const colorReducer = colorSlice.reducer

export const {
    reset,
    refresh,
    addLeftColor,
    addRightColor,
    removeColor,
    lockColor
} = colorSlice.actions
