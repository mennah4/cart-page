import React from 'react';
import './App.css';
import Cart from './modules/Cart/cart.page';
import { Provider } from 'react-redux';
import { store } from './redux';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Provider store={store}>
      {/* <div classNameName="grid-cols-[minmax(160px,320px),minmax(320px,1fr),minmax(160px,320px)]">
        <Sidebar />
        <Cart />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div >
          <Sidebar />
        </div>
        <div className="bg-white col-span-1 md:col-span-9">
          <Cart />
        </div>
      </div>

    </Provider>

  );
}

export default App;
