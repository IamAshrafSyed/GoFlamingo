import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';
import { Earn } from './pages/Earn';
import { FFI } from './pages/FFI';
import { Transaction } from './pages/Transaction';
import { Borrow } from './pages/Borrow';
import { NotFound } from './pages/NotFound';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './functions/ethconnect';
import detectEthereumProvider from '@metamask/detect-provider';

class App extends Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const provider = await detectEthereumProvider()
 
if (provider) {
 
  console.log('Ethereum successfully detected!')
  // Legacy providers may only have ethereum.sendAsync
  const chainId = await provider.request({
    method: 'eth_chainId'
  })
} else {
 
  // if the provider is not detected, detectEthereumProvider resolves to null
  console.error('Please install MetaMask!')
}

const ethereumButton = document.querySelector('.eth_connect_btn');

ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  provider.request({ method: 'eth_requestAccounts' });
});
      
    
  }
  componentDidUpdate() {
    console.log(66);
  }
  render(){return (
    <React.Fragment>
      <Router>
        <div className="container-fluid">
      <Row>
        <Col md="2" className="navbar_side">
      <NavigationBar />
      </Col>
      <Col md="10">
 
          <Layout>
            <Switch>
              <Route exact path="/" component={Earn} />
              <Route path="/earn" component={Earn} />
              <Route path="/borrow" component={Borrow} />
              <Route path="/ffi" component={FFI} />
              <Route path="/transfer" component={Transaction} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
          </Col>
          </Row>
          </div>
      </Router>
    </React.Fragment>
  );
  }
}

export default App;
