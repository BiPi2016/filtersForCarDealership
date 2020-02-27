import React from 'react';

import Select from '../../select/select';

import filterStyles from '../../../assets/css/filterStylesNew.module.css';

const Filter = (props) => {
    let filterTerm = null;
    if(props.filterConditions.length === 1) {
        const filter = props.filterConditions[0];
        filterTerm = (
        <section className={filterStyles.filterTerm}>
            <p className={filterStyles.filterHeading}>
                {filter.title}
            </p>
            <Select filter={filter} changed={props.changed} ranges={props.ranges}/>
        </section>);
    }
    if(props.filterConditions.length === 2){
        const filterFrom = props.filterConditions[0];
        const filterTo = props.filterConditions[1];
        filterTerm = (
        <section className={filterStyles.filterTerm}>
            <p className={filterStyles.filterHeading} >
                {filterFrom.title}
            </p>
            <Select filter={filterFrom} changed={props.changed}  ranges={props.ranges}/>
            <Select filter={filterTo} changed={props.changed}  ranges={props.ranges}/>
        </section>
        );  
    }
    return(
        <div>{filterTerm}</div>                
    );
}

export default Filter;