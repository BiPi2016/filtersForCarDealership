import React from 'react';

const SelectOption = (props) => {
    return(
        <option value={props.value}>
            {props.value}
        </option>
    );
}

export default SelectOption;