import React from 'react';

import bulmaClasses from '../bulma.min.module.css';

const SelectOption = (props) => {
    return(
        <option value={props.value}>
            {props.value}
        </option>
    );
}

export default SelectOption;