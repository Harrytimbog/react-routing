import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
    // console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {}
  });

  const fetchItem = async() => {
    const fetchItem = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`)
    const item = await fetchItem.json();
    setItem(item.data);
    console.log(item.data);
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} />
    </div>
  );
}

export default ItemDetail;
