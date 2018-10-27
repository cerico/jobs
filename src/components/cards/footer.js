import React from 'react';

const Footer = (props) => {

  const colourStyle = {
    // borderColor: props.product .color,
    borderStyle: 'solid',
    borderTopWidth: '1px',
    marginTop: '5px'
  };

  const urlStyle = {
    marginTop: '0.5rem',
    float: 'right',
    fontSize: '0.74rem',
    fontFamily: 'roboto'
  };

  return(
    <div style={colourStyle}>
      <p style={urlStyle}>{props.long}</p>
     </div>
  )
};

export default Footer