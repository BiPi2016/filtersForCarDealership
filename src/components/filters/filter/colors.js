import React from 'react';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import filterStyles from '../../../assets/css/filterStylesNew.module.css';

const Color = (props) => {
    let circleStyle = {
        borderColor: props.color=='white'?'gray':'transparent',
        backgroundColor: props.color.toString(),
    };
    let tickColor = {
        color: props.color=='white'?'gray':'white'
    }
    return (
    <section className={filterStyles.colorCheckboxContainer}>
        <input type="checkbox" 
            name={props.color} 
            id={props.color} 
            value={props.color} 
            className={filterStyles.colorCheckbox} 
            onChange={props.checked}
            />
        <label htmlFor={props.color}>
            <div 
            className={[filterStyles.colorCirlce, filterStyles.centeredFlex].join(' ')}
            style={circleStyle}> 
                <span 
                className={filterStyles.selectedColorTick} 
                style={tickColor}>
                 <FontAwesomeIcon icon={faCheck} />
                </span>
            </div>
        </label>

    </section>
)};


const Colors = (props) => (
    <section className={[filterStyles.filterTerm, filterStyles.colorFilter].join(' ')} >
        <h3 className={filterStyles.filterHeading}>Färg</h3>
        <section className={filterStyles.colorContainer} >
            {props.colors.map( color => <Color 
                color={color} 
                key={color} 
                checked={props.checked} />)}
        </section>
    </section>
);

export default Colors;