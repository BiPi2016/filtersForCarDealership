import {
  faDollarSign, 
  faBatteryThreeQuarters,
  faCalendarCheck,
  faGamepad,
  faTruckMonster,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';


export const filterRanges =  [{
    name: 'priceFrom',
    title: 'Pris Från',
    icon: faDollarSign,
    optionList: [1000, 2000, 3000, 5000],
  },
  {
    name: 'priceTo',
    title: 'Pris Till',
    icon: faDollarSign,
    optionList: [1000, 2000, 3000, 5000]
  },
  {
    name: 'yearTo',
    title: 'årsmodell från',
    icon: faCalendarCheck,
    optionList: [2020, 2019, 2018, 2017]
  },
  {
    name: 'yearTo',
    title: 'årsmodell till',
    icon: faCalendarCheck,
    optionList: [2020, 2019, 2018, 2017]
  },
  {
    name: 'gearbox',
    title: 'växellåda',
    icon: faGamepad,
    optionList: ['manuell', 'automatisk']
  },
  {
    name: 'fuelType',
    title: 'drivmedel',
    icon: faBatteryThreeQuarters,
    optionList: ['diesel', 'bensin', 'elektrik', 'hybrid']
  },
  {
    name: 'meterFrom',
    title: 'mätarställning från',
    icon: faTachometerAlt,
    optionList: [1000, 2000, 3000, 5000]
  },
  {
    name: 'meterTill',
    title: 'mätarställning till',
    icon: faTachometerAlt,
    optionList: [1000, 2000, 3000, 5000]
  },
  {
    name: 'horsePowerFrom',
    title: 'hästkraft från',
    icon: faTruckMonster,
    optionList: [40, 60, 80, 100]
  },
  {
    name: 'horsePowerTo',
    title: 'hästkraft till',
    icon: faTruckMonster,
    optionList: [40, 60, 80, 100]
  }
];

export const bodyTypeFilters = [
  'Sedan', 
  'Kombi',
  'Halvkombi', 
  'SUV', 
  'Koupe', 
  'Cab', 
  'Minibuss',
  'Pickup'
];

export const colorFilters = [
  'white',
  'black',
  'gray',
  'brown',
  'red',
  'blue',
  'green',
  'yellow'
];

