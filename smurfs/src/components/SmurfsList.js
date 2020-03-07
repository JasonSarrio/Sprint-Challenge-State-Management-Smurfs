import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf, removeSmurf } from '../actions/index';

const SmurfsList = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    console.log(props)

    const handleName = e => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleAge = e => {
        e.preventDefault();
        setAge(e.target.value)

    }

    const handleHeight = e =>{
        e.preventDefault();
        setHeight(e.target.value)

    }

    const handleRemove = e => {
        // e.preventDefault();
        // console.log(e)
        props.removeSmurf(e);

    }

    const smurfGet = e => {
        props.getSmurf()
        props.addSmurf(name, age, height)
    }