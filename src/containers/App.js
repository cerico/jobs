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
      bg: '#335d88',
      fg: '#253248',
      font: 'raleway'
    }

    return (
      <Router>
        <main>
        <Layout scheme={scheme} links={links}/>
          <div>
            <Switch>
              <Route path="/jobs/:id" component={Product} />
              <Route exact path="/" component={Products}/>
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

