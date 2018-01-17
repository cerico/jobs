import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import { Link } from 'react-router-dom';
import MdHighlightOff from 'react-icons/lib/md/highlight-off';
import {selectProduct} from '../selectors/product';
import style from './product.css'
import Card from './cards';

const Product = (props) => {


    return (
      props.product ? 
        <div>
   
          <div className={classNames(style.product, style.detail)}>
            <Link style={{'float':'right'}} to="/">
              <MdHighlightOff size={40} />
            </Link>
            <Card product={props.product} long={props.product.long}
         
            />
          </div> 
        </div>
      : null
    )
  }

  const mapStateToProps = (state,ownProps) => {

  return {
    product: selectProduct(state.jobs,ownProps.match.params.id),
    long:"yes"
  };
};

export default connect(mapStateToProps)(Product);

