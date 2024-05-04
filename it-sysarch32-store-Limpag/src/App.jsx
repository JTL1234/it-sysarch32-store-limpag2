import React, { Component } from 'react';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductContextProvider } from './global/ProductsContext';
import SignUp from './components/SignUp';
import Login from './components/Login'; 
import {auth, db} from './Config/Config';
import CartContextProvider from './global/CartContext';
import Cart from './components/Cart';

class App extends Component {

  state = {
    user: null,
}

componentDidMount() {

    // getting user info for navigation bar
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().Name
                })
            })
        }
        else {
            this.setState({
                user: null
            })
        }
    })

}
  render() {
    return (
      <ProductContextProvider> {/* Wrap routes with ProductContextProvider */}
      <CartContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={()=><Home user={this.state.user}/>} />
            <Route path='/addproducts' component={AddProducts} />
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
            <Route path='/cartproducts' component={()=><Cart user={this.state.user}/>}/>
          </Switch>
        </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    );
  }
}

export default App;
