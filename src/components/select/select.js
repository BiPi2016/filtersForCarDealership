import React from 'react';

import SelectOption from '../selectOption/selectOption';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import 'react-bulma-components/dist/react-bulma-components.min.css';
//import bulmaClasses from '../../assets/css//bulma.module.css';

const Select = (props) => {
    return(
        <div className={["control", "has-icons-left"].join(' ')}>
            <div className="select">
                <select name={props.filter.name} >
                    {props.filter.optionList.map( item => <SelectOption 
                        value={item} key={item.toString()}/> )}
                </select>
            </div>
            <span className={["icon", "is-left"].join(' ')}>
                <FontAwesomeIcon icon={props.filter.icon} />
            </span>
        </div>
     );
}

export default Select;