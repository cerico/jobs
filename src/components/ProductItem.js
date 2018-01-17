import React from 'react';
import { Link } from 'react-router-dom';
import styles from './products.css';
import { getFirst, getLast, getImage } from '../utils'

class ProductItem extends React.Component  {

  render() {

    const product = this.props.product
    product.country = 'norway'
    product.url = `/products/${product.id}`
    !product.image ? product.image =  getImage(product.id) : product.image
      
    return (
      <article className={styles.product}>
          <Link to={product.url}>
            <img className={styles.image} src={product.image}/>       
            <div className={styles.info}>
              <h1 className={styles.title}>{product.name}</h1>
            </div>
          </Link>
      </article>
    )
  }
}

export default ProductItem