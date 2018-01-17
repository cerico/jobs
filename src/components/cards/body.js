import React from 'react';
import Top from './top'
import Detail from './detail';
import WideLogo from './wide-logo';

import styles from './card.css'

const Body = (props) => {

  const divStyle = {
    paddingTop: '.625rem',
    height: '100%'

  };
  let marginBottom;
  props.product.direction === 'row' ? 
    marginBottom = '127px' : marginBottom = '0px'

  const whatStyle = {
    display: 'flex',
    flexDirection: props.product.direction || 'row',
    marginBottom: marginBottom
  };

  return (
    <div style={whatStyle}>
      <Top {...props}/>
      <Detail {...props}/>
      {props.product.direction == 'column' && !props.product.mini? 
        <WideLogo {...props}/>
        : null
      }
    </div>
  )
}

export default Body
