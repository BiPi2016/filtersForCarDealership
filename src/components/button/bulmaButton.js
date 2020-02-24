import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
 
export default (props) => (
  <Button color="primary">{props.buttonTitle}</Button>
)