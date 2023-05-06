import React from 'react';
import './App.css';
import Cart from './modules/Cart/cart.page';
import { Provider } from 'react-redux';
import { store } from './redux';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <div className='bg-white'>
          <Sidebar />
        </div>
        <div className="flex-1 ml-16 bg-gray-100">
          <Cart />
        </div>
      </div>

    </Provider>

  );
}

export default App;
