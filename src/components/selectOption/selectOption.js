import React from 'react';

import filterStyles from '../../assets/css//filterStylesNew.module.css';

const SelectOption = (props) => {
    return(
        <option value={props.value} className={filterStyles.selectOption}>
            {props.value}
        </option>
    );
}

export default SelectOption;