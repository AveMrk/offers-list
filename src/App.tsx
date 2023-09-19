import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import data from './data/etsy.json';
const actualData = [];
for (const datum of data) {
  const {
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
  } = datum;
  actualData.push({
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price,//: (+price).toFixed(2),
    quantity,
  });
}

const list = actualData.filter(item => item.MainImage !== undefined);

function App() {
  return (
    <div className="App">
      <Listing items={list}/>
     
    </div>
  );
}

export default App;
//