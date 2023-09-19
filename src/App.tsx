import React from 'react';
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
const list= actualData.filter(function (el){
  return el.listing_id !== undefined &&
        el.url !== undefined &&
        el.MainImage !== undefined &&
        el.MainImage.url_570xN !== undefined &&
        el.title !== undefined &&
        el.currency_code !== undefined &&
        el.price !== undefined &&
        el.quantity !== undefined;
});

function App() {
  return (
    <div className="App">
     {console.log(typeof(list))}
      <Listing items={list}/>
     
    </div>
  );
}

export default App;
