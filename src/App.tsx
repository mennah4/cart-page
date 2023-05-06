import React from 'react';
import './App.css';
import Cart from './modules/Cart/cart.page';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline text-red-400">
      Hello world!
      <Cart />
    </h1>
    </Provider>
    
  );
}

export default App;
