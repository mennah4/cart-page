import React from 'react';
import './App.css';
import Cart from './modules/Cart/cart.page';
import { Provider } from 'react-redux';
import { store } from './redux';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      <div className="grid gap-3 p-3 grid-cols-[minmax(160px,320px),minmax(320px,1fr),minmax(160px,320px)]">
        <Sidebar />
        <Cart />
      </div>

    </Provider>

  );
}

export default App;
