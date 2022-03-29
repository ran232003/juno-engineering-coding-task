import React, { useState } from "react";
import { fetchImages, fetchImageUrls } from "../api/index";
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';



const ImageCarousel = (props) => {
  const {imageArray} = props;
  let imageArrayLength = imageArray.length;
 
    const [currentImage, setCurrentImage] = useState(0);
    const [loading, setLoading] = useState(true);
   const HandleNextImage = async()=>{
    if(currentImage === imageArrayLength -1){
        setCurrentImage(0);
        let res = await fetch(imageArray[currentImage])
        console.log(res)
    }
    else{
        setCurrentImage(currentImage+1);
        // let res = await fetch(imageArray[currentImage])
        // console.log(res)
        // let data = await res.json();
        // console.log(data)
        fetch(imageArray[currentImage]).then(res=> res.blob()).then(result=>{
            console.log(result)
            var objectURL = URL.createObjectURL(result)
            console.log(objectURL)
        })
    }
    setLoading(true);
   } 
   const handlePreviusImage = ()=>{
    if(currentImage === 0){
        setCurrentImage(imageArrayLength - 1);
        
    }
    else{
        setCurrentImage(currentImage-1);
        
    }
    setLoading(true);
   }
   console.log(currentImage)
   const imageLoad = ()=>{
       //setTimeout(setLoading(false),200)
    setLoading(false);
   }
   console.log(loading);
    return (
        <section className='slider'> 
        
        <ArrowCircleLeftSharpIcon className='left-arrow'  onClick = {handlePreviusImage}/>
        <ArrowCircleRightSharpIcon className='right-arrow' onClick = {HandleNextImage}/>
        <div className="1" style={{display: loading ===true ? "block":"none"}}>
      
       </div>
        <div className="2" style={{display: loading ===false ? "block" : "none"}}>
        {imageArray.map((image,index)=>{
            return(
                
                <div
            className={index === currentImage ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentImage && (
              <img src={image} alt='travel image' className='image' onLoad={imageLoad}/>
            )}
          </div>
            )
        })}
        </div>
       
        </section>
        );
};
export default ImageCarousel;
