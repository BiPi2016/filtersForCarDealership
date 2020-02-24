import React from 'react';

import Filter from './filter/filter';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faDollarSign, 
  faBatteryThreeQuarters,
  faCalendarCheck,
  faGamepad,
  faTruckMonster,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faDollarSign,  
  faBatteryThreeQuarters, 
  faTachometerAlt,
  faTruckMonster,
  faGamepad,  
  faCalendarCheck
  );


  const filters =  [{
    name: 'Price',
    title: 'Pris',
    icon: faDollarSign,
    optionList: [1000, 2000, 3000, 5000],
  },
];

const Filters = () => {
    return(
        <Filter filter={filters[0]} />
    );
}

export default Filters;
