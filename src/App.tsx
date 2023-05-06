import React from 'react';
import './App.css';
import Cart from './modules/Cart/cart.page';
import { Provider } from 'react-redux';
import { store } from './redux';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <div className="grid grid-cols-10 gap-4">
        <Sidebar />
        <Cart />
      </div>

    </Provider>

  );
}

export default App;
