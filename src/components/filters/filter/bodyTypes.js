import React from 'react';
import filterStyles from '../../../assets/css/filterStylesNew.module.css';
import { bodyTypeFilters } from '../../utils/filterTerms';

const BodyType = props => {
    return(
        <section className={filterStyles.bodytypeTerm}>
            <input type="checkbox" 
                name={props.title} 
                id={props.title} 
                className={filterStyles.bodytypeCheckbox} 
                defaultChecked={false}
                onChange={props.checked}
                />
            <div className={filterStyles.labelContainer}>
                <label htmlFor={props.title} className={filterStyles.bodytypeLabel}>
                    <p className={[filterStyles.bodytypeText, filterStyles.centeredFlex].join(' ')}>{props.title}</p>
                </label>
            </div>
        </section>
    )
}

const BodyTypes = (props) => {
    console.log('selected boydtypes: ' + props.checkedBodyType);
    return(
        <section className={[filterStyles.filterTerm, filterStyles.filterBodytype].join(' ')}>
            <h3 className={filterStyles.filterHeading}>Karroseri</h3>
            <section className={filterStyles.bodytypeContainer} >
                {props.bodyTypes.map( bodyType => <BodyType title={bodyType} 
                    key={bodyType}
                    checked={props.checked} 
                    />)}
            </section>
        </section>
    );
}

export default BodyTypes;
