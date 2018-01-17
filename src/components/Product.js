import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import {selectProduct} from '../selectors/product';
import style from './product.css'

const Product = (props) => {

    return (
      props.product ? 
        <div>
          <div className={classNames(style.product, style.imageContainer)}>
            <img className={style.image} src={props.product.image}/>
          </div>
          <div className={classNames(style.product, style.detail)}>
            <Link style={{'float':'right'}} to="/">
              <MdHighlightOff size={40} />
            </Link>
            <div className="change"> 
              <h1 className={style.productName}>{props.product.name} 
                <span className={style.country}> ({props.product.country})</span> 
              </h1> 
              <div className={style.description}></div> 
              <ul>

              </ul>
            </div>
          </div> 
        </div>
      : null
    )
  }

  const mapStateToProps = (state,ownProps) => {

  return {
    product: selectProduct(state.jobs,ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Product);

