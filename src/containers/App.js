import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
const classNames = require('classnames');
import Layout from 'charles-lamb-layout';
import Product from '../components/Product';
import Products from '../components/Products';
import { getProducts } from '../state/actions/products';

class App extends React.Component  {

  componentWillMount () {
    this.props.getProducts()
  }
  
  render(){

    const links = [
      {path:'/',title:"home",key:1},
      {path:'/about',title:"about",key:2}
      ]
    const scheme = {
      bg: 'white',
      fg: '#253248',
      font: 'raleway'
    }

    return (
      <Router>
        <main>
        <Layout scheme={scheme} links={links}/>
          <div>
            <Switch>
              <Route exact path="/" component={Products}/>
              <Route path="/jobs/:id" component={Product} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
      products: state.products
    })
}

export default connect(mapStateToProps, {getProducts})(App);

