import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TshirtList } from './components/TshirtList';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <CartContextProvider>
      <div>
             <TshirtList/>
             <hr/>
             <Cart/>
      </div>
    </CartContextProvider>

  );
}

export default App;
