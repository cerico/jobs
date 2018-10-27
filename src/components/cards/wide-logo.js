import React from 'react';

var classNames = require('classnames');

const host = window.location.host
let url
if (host.includes('localhost')){
  url = `http://${host}`
} else {
  url = `https://${host}`
}

const WideLogo = (props) => {
    
    var imageUrl = `${url}/public/u${props.product.id}.jpg`
    console.log(imageUrl)
    let useStyle
    var imgStyle = {
      backgroundImage: 'url(\'' + imageUrl + '\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      fontSize:'0px'
    };
    var divStyle = {
      display: 'inline-block',
      position: 'relative',
      height: '174px',
      marginLeft: '10px'
    };
    var numStyle = {
      fontSize: '6rem',
      borderRadius: '50%',
      margin: '0 auto',
      marginTop: '0px',
      width: '50%',
      height: '80%',
      marginTop: '14px',
      textAlign: 'center',
      paddingTop: '19%',
      border: '2px solid',
      marginLeft: '60px'
    }

    props.product.id ? 
      useStyle = imgStyle
      : useStyle = numStyle


    return (
      <div style={divStyle}>
        <div style={useStyle}>{props.product.number}</div>
      </div>
    )
};

export default WideLogo
