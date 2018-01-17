import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './jobs.css';
import Card from './cards';

class Jobs extends React.Component  {

  render (){

    
    const style = {
      general: {
        display: 'flex',
      }
    }
  
    return(
      <div className={styles.grid} style={style.general}>
        {this.props.jobs.length > 0 ? 
          this.props.jobs.map((product, i) =>
            <Card 
              product={product}
              key = {i}
            />
          ) 
          : null
        }
      </div> 
    )
  }
}

const mapStateToProps = (state) => {

  return ({
      jobs: state.jobs,
    })
}

export default connect(mapStateToProps, null )(Jobs);


