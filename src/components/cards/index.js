import React from 'react';
import { Link } from 'react-router-dom';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import styles from './card.css'


const Cardu = (props) => {

  const internalExternal = () => {
      
    const cardStyle = {
      background: props.product.background,
      color: props.product.color,
      opacity: props.product.opacity || 0.88
    };

    if (props.product.mini){
      cardStyle.height = '190px'
    }

    const link = `/jobs/${props.product.id}`

    if (props.product.id) {
      return <Link to={link} className={styles.card} style={cardStyle}>{innerCard()}</Link>
    }
    return <a href={props.product.url} className={styles.card} style={cardStyle}>{innerCard()}</a>
  }

  const innerCard = () => {
    const inner = {
      paddingBottom: '1.25rem',
      paddingTop: '2.25rem',
      position: 'relative'
    };
    return <div style={inner}>
      <Header {...props}/>
      {showData()}
      <Footer long={props.long}/> 
    </div>
  }

  const showData = () =>{
    return (<CardBody {...props}/>)
  }

  return internalExternal()
}

export default Cardu
