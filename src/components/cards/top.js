import React from 'react';
var classNames = require('classnames');

const Top = (props) => {

  var divStyle = {
    borderColor: props.product.color,
    borderWidth: 0,
    borderBottomWidth: '1px',
    marginBottom: '.625rem',
    paddingBottom: 0,
    minHeight: 12,
    marginTop: '0.15rem',
    width:'360px'
  };

  var textStyle = {
    fontSize: '1.25rem',
    marginBottom: '.3rem'
  };
  var logo = {
    backgroundImage: 'url(\'' + props.product.logo + '\')',
    height: '108px',
    backgroundSize: 'cover'
  }

  return (
    <div style={divStyle}>
      <p style={textStyle}>{props.product.description}</p>
      {props.product.direction == 'row' ? 
        <div style={logo}/>
        : null
      }
    </div>
  )
};

export default Top