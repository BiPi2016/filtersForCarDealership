import React from 'react';

import classes from '../bulma.min.css';

const InputElem = (props) => {
    return(
        <input name={props.name}
        type={props.type}
        value={props.value} 
        onChange={props.changed} />
    );
}

export default InputElem;