import { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import logo from '../logo.svg';
import Test from '../task2/ecommerce';
import './App.css';
import ImageCarousel from "./ImageCarousel";

function App() {
  const[array,setArray] = useState([])
  const getUrls = async()=>{
    const urls = await fetchImages();
    setArray(urls);
  }
  

  useEffect(()=>{
    getUrls()
  },[])
  return (
      <div>
        <Test/>
        <ImageCarousel 
       imageArray = {array}
        />
      </div>
  );
}

export default App;
