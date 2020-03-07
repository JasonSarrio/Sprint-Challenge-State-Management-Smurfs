import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF })
    axios.get('http://localhost:3333/smurfs').then(res => {
        // console.log(res.data)
        dispatch({ type: UPDATE_SMURF, payload: res.data })
    }).catch(err => {
        console.log('Error: ', err)
    })
}

