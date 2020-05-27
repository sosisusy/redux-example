import { createAction, handleActions } from "redux-actions"

// action types
const INCREMENT = "counter/INCREMENT"
const DECREMENT = "counter/DECREMENT"


// actions
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)


// reducer
const initialState = {
    number: 0
}

export default handleActions({
    [INCREMENT]: ({ number }) => ({ number: number + 1 }),
    [DECREMENT]: ({ number }) => ({ number: number - 1 }),
}, initialState)