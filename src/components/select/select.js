import React from 'react';

import SelectOption from '../selectOption/selectOption';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import 'react-bulma-components/dist/react-bulma-components.min.css';
//import bulmaClasses from '../../assets/css//bulma.module.css';
import filterStyles from '../../assets/css/filterStylesNew.module.css';

import { faDollarSign, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Select = (props) => {
    let buttonClasses = ['button', 'is-primary', 'is-outlined'];
    return(
        <div className={["control", "has-icons-left"].join(' ')}>
            <div className="select">
                <select name={props.filter.name} >
                    {props.filter.optionList.map( item => <SelectOption 
                        value={item} key={item.toString()}/> )}
                </select>
            </div>
            <span className={["icon", "is-left"].join(' ')}>
                <FontAwesomeIcon icon={faDollarSign} />
            </span>
        </div>
     );
}

export default Select;