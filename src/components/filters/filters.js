import React from 'react';

import RangeFilter from './filter/rangeFilter';
import BodyTypes from './filter/bodyTypes';
import Colors from './filter/colors';
import BulmaButton from '../button/bulmaButton';
import {filterRanges, bodyTypeFilters, colorFilters} from '../utils/filterTerms';

import WooCommerce from '../../data/dataInWP';

import filterStyles from '../../assets/css/filterStylesNew.module.css';

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: filterRanges,
      ranges: {
        priceFrom: 0,
        priceTo: 2000,
        yearFrom: 2010,
        yearTo: 2020,
        gearbox: 'automatisk',
        fuelType: 'diesel',
        meterFrom: 0,
        meterTo: 2000,
        horsePowerFrom: 40,
        horsePowerTo: 60,
        },      
      bodyTypes:bodyTypeFilters,
      selectedBodyTypes: {test: 'test'},
      colors: colorFilters,
      selectedColors: {someColor: true}
    }
    this.onSelectChangeHandler=this.onSelectChangeHandler.bind(this);
  }

  onSelectChangeHandler = (evt) => {
    alert('clicked'+ evt.target.name);
    const name = evt.target.name;
    const value = evt.target.value;
    let newRanges = this.state.ranges;
    newRanges[name] = value;
    this.setState(() => ({ranges: newRanges
    }));
    console.log(this.state.ranges);
  }

  onBodyTypeSelectedHandler = (evt) => {
    let name = evt.target.name;
    this.setState(prevState => {
      console.log('Bodytype clicked ' + name );
      let checkedBodyTypes = prevState.selectedBodyTypes;
      console.log('Bodytypes selected untill now: ' + checkedBodyTypes);
      checkedBodyTypes[name] = !checkedBodyTypes[name];
      return ({selectedBodyTypes: checkedBodyTypes})
    });
  }

  onColorSelectedHandler = (evt) => {
    let colorName = evt.target.name;
    this.setState( prevState => {
      let colors = prevState.selectedColors;
      colors[colorName] = !colors[colorName];
      return({selectedColors: colors});
    });
  }
  
  handleBtnClick = (props) => {

  }

  componentDidMount() {
    console.log(this.state);

    let checkedTypes = {};
    this.state.bodyTypes.map( bodyType => checkedTypes[bodyType] = false);
    this.setState({selectedBodyTypes:checkedTypes});

    let checkedColors = {};
    this.state.colors.map( color => checkedColors.color = false);
    this.setState({selectedColors: checkedColors});

    WooCommerce.get('products')
    .then( results => {
      this.setState({products: results.data})
      console.log(this.state.products);
    })
    .catch( err => console.log(err.response.data))
  }

  render() {  

   /*  fetchProducts(); */
    return(
        <section>
            <div className={filterStyles.upperFilters}>
                <RangeFilter 
                  filterConditions={[this.state.filters[0], this.state.filters[1]]} 
                  changed={this.onSelectChangeHandler}
                  ranges={this.state.ranges}
                  />
                <RangeFilter 
                  filterConditions={[this.state.filters[2], this.state.filters[3]]} 
                  changed={this.onSelectChangeHandler} 
                  ranges={this.state.ranges}
                  />
                <RangeFilter 
                  filterConditions={[this.state.filters[4]]} 
                  changed={this.onSelectChangeHandler} 
                  ranges={this.state.ranges}
                  />
                <RangeFilter 
                  filterConditions={[this.state.filters[5]]} 
                  changed={this.onSelectChangeHandler} 
                  ranges={this.state.ranges}
                  />
                <RangeFilter 
                  filterConditions={[this.state.filters[6], this.state.filters[7]]} 
                  changed={this.onSelectChangeHandler} 
                  ranges={this.state.ranges}
                  />
                <RangeFilter 
                  filterConditions={[this.state.filters[8], this.state.filters[9]]}  
                  changed={this.onSelectChangeHandler}
                  ranges={this.state.ranges}
                  />
            </div>
            
            <div className={filterStyles.lowerFilters}>
              <BodyTypes 
                bodyTypes={this.state.bodyTypes}  
                checked={this.onBodyTypeSelectedHandler}
              />
              <Colors 
                colors={this.state.colors} 
                checked={this.onColorSelectedHandler}/>
            </div>
        </section>
    );
  }
}

/* function fetchProducts() {
  let consumerKey = "ck_654be714ee3c9310f882d465cd2d7c0a241e6690";
  let consumerSecret = "cs_b441d22e822ff7864684e52f3aae10f011e6f2c9";
  let url = 'https://cars.amp-dev.se/wp-json/wc/v3/products';
  let urlString = url + `?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
  fetch(urlString,{
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  }).then(results => console.log(results))
}
 */
export default Filters;
