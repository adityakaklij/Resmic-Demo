import './App.css';
import { useState } from 'react';
import {EVMConnect, Tokens, Chains} from 'resmic'
import Product from './Component/Product';

function App() {
  const [abc,setPaymentStatus]= useState(false);

  return (
    <div className='app'>
      <h1>Resmic Demo</h1>
      <Product/>

    </div>
  );
}

export default App;
