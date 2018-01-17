import React from 'react';

const Detail = (props) => {

  const showThirdCol = function showThirdCol() {
    if (props.product.cols == 3) {
      <div></div>
    }
  };


  let border,lineHeight,paddingLeft,paddingTop
  if (props.product.direction === 'column'){
    border = 'dotted 1px',
    lineHeight = '1.1rem';
    paddingTop ='13px',
    paddingLeft = '0%' 
  } else {
    border = '0px', 
    lineHeight = '1.4rem',
    paddingTop ='25px',
    paddingLeft = '7%'
  }

  const wrapper = {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    overflow: 'auto',
    float: 'left',
    paddingTop: '8px',
    paddingBottom: '8px',
    marginBottom: '5px',
    borderTop: border,
    borderBottom: border,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft
  };

  const section = {
    borderLeft: 'none',
    paddingLeft: '0',
    paddingLeft: '8px',
    paddingRight: '8px',
    flex: 1
  };

  const value = {
    fontSize: '22px',
    lineHeight: '1rem',
    marginBottom: '5%'
  };

  const spacer = {
    height:'27px'
  }

  
  const label = {
    fontSize: '14px',
    lineHeight: lineHeight,
    fontFamily: 'archivo narrow',
    fontSize: '1rem'
  };

  const borderLeft = {
    borderLeft: 'dotted 1px'
  };

  return (
    <div style={wrapper}>
    {props.product.direction == 'column' ?
      <div style={section}>
        <div style={label}>{props.product.textOne}</div>
        <div style={label}>{props.product.textTwo}</div>
      </div>
      :  null}
      {props.product.direction == 'column' ?
      <div style={{...section,...borderLeft}}>
        <div style={label}>{props.product.textThree}</div>
        <div style={label}>{props.product.textFour}</div>
      </div>
      
      :  null}
       {props.product.direction == 'column' && props.product.textFive ?
      <div style={{...section,...borderLeft}}>
        <div style={label}>{props.product.textFive}</div>
        <div style={label}>{props.product.textSix}</div>
      </div>
      
      :  null}
        {props.product.direction == 'column' ?
        null :
        <div style={section}>
        <div style={label}>{props.product.textOne}</div>
        <div style={label}>{props.product.textTwo}</div>
        <div style={label}>{props.product.textThree}</div>
        <div style={label}>{props.product.textFour}</div>
        <div style={label}>{props.product.textFive}</div>
        <div style={label}>{props.product.textSix}</div>
      </div>

  }
        
        
    </div>
  );
};

export default Detail;
