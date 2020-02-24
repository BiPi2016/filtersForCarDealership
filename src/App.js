import React from 'react';
import appStyles from './App.module.css';

import Filters from './components/filters/filters';

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



class App extends React.Component{
  
  state = {
    Filters: [{
      name: 'Price',
      title: 'Pris',
      optionList: [1000, 2000, 3000, 5000],
    },
  ]
  }

  render() {
    return(
      <div className={appStyles.App}>
        <Filters />
      </div>
    );
  }
}


export default App;
