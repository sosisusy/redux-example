import { INCREMENT, DECREMENT } from "../actionTyeps"
import { combineReducers } from "redux"


const counterInitialState = {
    value: 0
}

const counter = (state = counterInitialState, { type }) => {
    switch (type) {

        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + 1
            })
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - 1
            })

        default:
            return state
    }
}


const counterApp = combineReducers({
    counter
})

export default counterApp