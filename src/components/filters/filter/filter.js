import React from 'react';

import Select from '../../select/select';

import filterStyles from '../../../assets/css/filterStylesNew.module.css';

const Filter = (props) => {
    return(
        <section className={filterStyles.filterTerm}>
            <p className={filterStyles.filterHeading}>
                {props.filter.title}
            </p>
            <Select filter={props.filter} />
        </section>
        
    );
}

export default Filter;