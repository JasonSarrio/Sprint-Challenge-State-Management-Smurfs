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

    const handleHeight = e => {
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



    return (
        <div>

            <form onSubmit={smurfGet}>
                <label htmlFor='name'>Smurf Name:<br /><input onChange={handleName} id='name' name='name'></input></label><br />
                <label htmlFor='age'>Smurf Age:<br /><input onChange={handleAge} id='age' name='age'></input></label><br />
                <label htmlFor='height'>Smurf Height:<br /><input onChange={handleHeight} id='height' name='height'></input></label><br />
                <button>Add Smurf</button>
            </form>



            <button onClick={smurfGet}>View Smurfs</button>

            <div className='smurf-container'>
                {props.smurfs.length ? props.smurfs.map(item => {
                    return (
                        <div className='smurf-bois'>
                            <h3>{item.name}</h3>
                            <p>Age: {item.age}</p>
                            <p>Height: {item.height}</p>
                            <button onClick={() => handleRemove(item.id)}>Remove Smurf</button>
                        </div>
                    )
                }) : (<div>Let's add some Smurfs!</div>)}

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurf, addSmurf, removeSmurf })(SmurfsList)