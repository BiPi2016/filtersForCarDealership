import React from 'react';

import SelectOption from '../selectOption/selectOption';
import BulmaButton from '../button/bulmaButton';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import bulmaClasses from '../../assets/css//bulma.module.css';
import filterStyles from '../../assets/css/filterStylesNew.module.css';

import { faDollarSign, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Select = (props) => {
    let buttonClasses = ['button', 'is-primary', 'is-outlined'];
    return(
        <div className={["control", "has-icons-left"].join(' ')}>
            <div className="select">
                <select name={props.filter.name} className={bulmaClasses}>
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