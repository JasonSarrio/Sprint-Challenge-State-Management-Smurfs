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

export const addSmurf = (name, age, height) => dispatch => {
    dispatch({ type: FETCH_SMURF })
    const newId = Date.now();
    axios.post(`http://localhost:3333/smurfs`, {
        name: name,
        age: age,
        height: height,
        id: newId
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log('POST Error:', err)
    })
}

export const removeSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF })
    axios.delete(`http://localhost:3333/smurfs/${id}`).catch(err => console.log('REMOVE error:', err))
}