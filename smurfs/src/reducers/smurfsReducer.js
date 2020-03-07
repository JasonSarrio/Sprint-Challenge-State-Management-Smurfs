import { FETCH_SMURF, UPDATE_SMURF, DELETE_SMURF } from "../actions";


export const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}


export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF:
            return {
                smurfs: [],
                isFetching: true,
            }
        case UPDATE_SMURF:
            // console.log(action.payload)
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,

            }
        case DELETE_SMURF:
            return {
                ...state
            }
        default:
            return state;
    }
}