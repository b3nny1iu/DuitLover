import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUsername, setPassword } = registerSlice.actions

export default registerSlice.reducer