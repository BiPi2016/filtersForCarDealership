import React from 'react';
import appStyles from './App.module.css';

import Filters from './components/filters/filters';

class App extends React.Component{

  render() {
    return(
      <div className={appStyles.App}>
        <Filters />
      </div>
    );
  }
}

export default App;
