import { createSlice } from '@reduxjs/toolkit'
import chroma from 'chroma-js'

export interface ColorState {
    count: number
    colors: string[]
}

const initialState: ColorState = {
    count: 0,
    colors: []
}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        refresh: (state) => {
            console.log('refresh')
            state.count = 5
            state.colors = [
                String(chroma.random()),
                String(chroma.random()),
                String(chroma.random()),
                String(chroma.random()),
                String(chroma.random())
            ]
        },
        addLeftColor: (state, { payload }) => {
            console.log('addLeftColor')
            if (state.count < 9) {
                const index = state.colors.indexOf(payload)
                const firstColor = state.colors[index]
                const secondColor = state.colors[index - 1]
                const newColor = chroma.mix(firstColor, secondColor).hex()
                state.colors = [
                    ...state.colors.slice(0, index),
                    newColor,
                    ...state.colors.slice(index, state.count)
                ]
                state.count++
            }
        },
        addRightColor: (state, { payload }) => {
            console.log('addRightColor')
            if (state.count < 9) {
                const index = state.colors.indexOf(payload)
                const firstColor = state.colors[index]
                const secondColor = state.colors[index + 1]
                const newColor = chroma.mix(firstColor, secondColor).hex()
                state.colors = [
                    ...state.colors.slice(0, index + 1),
                    newColor,
                    ...state.colors.slice(index + 1, state.count)
                ]
                state.count++
            }
        },
        removeColor: (state, { payload }) => {
            console.log('removeColor')
            state.count -= 1
            state.colors = state.colors.filter((color) => color !== payload)
        },
        updateColor: (state, { payload }) => {
            console.log('updateColor')
            const currentColorIndex = state.colors.indexOf(payload.color)
            state.colors = [
                ...state.colors.slice(0, currentColorIndex),
                payload.newColor,
                ...state.colors.slice(
                    currentColorIndex + 1,
                    state.colors.length
                )
            ]
        }
    }
})

export const colorReducer = colorSlice.reducer

export const {
    refresh,
    addLeftColor,
    addRightColor,
    removeColor,
    updateColor
} = colorSlice.actions
