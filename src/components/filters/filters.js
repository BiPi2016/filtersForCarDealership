import React from 'react';

import Filter from './filter/filter';
import filterTerms from '../utils/filterTerms';

import WooCommerce from '../../data/dataInWP';

import filterStyles from '../../assets/css/filterStylesNew.module.css';

class Filters extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: filterTerms
    }
  }

  componentDidMount() {
    console.log(this.state)
    WooCommerce.get('products')
    .then( results => {
      this.setState({products: results.data})
      console.log(this.state.products);
    })
    .catch( err => console.log(err.response.data))
  }

  render() {
    return(
        <section>
            <div className={filterStyles.upperFilters}>
                <Filter filterConditions={[this.state.filters[0], this.state.filters[1]]} />
                <Filter filterConditions={[this.state.filters[2], this.state.filters[3]]} />
                <Filter filterConditions={[this.state.filters[4]]} />
                <Filter filterConditions={[this.state.filters[5]]} />
                <Filter filterConditions={[this.state.filters[6], this.state.filters[7]]} />
                <Filter filterConditions={[this.state.filters[8], this.state.filters[9]]} />
            </div>
            <div className={filterStyles.lowerFilters}>
                              
            </div>
        </section>
    );
  }
}

export default Filters;
