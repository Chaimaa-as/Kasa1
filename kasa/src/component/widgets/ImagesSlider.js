import React,{useState,useEffect} from 'react';

const ImagesSlider = (props) => {

    const [currentImage,setCurrentImage]=useState(0)


    useEffect(() => {
        const timer = setTimeout(nextImage, 5000);
        return () => clearTimeout(timer);
      });

    function nextImage(){
        let img=currentImage+1
        if (img > props.urls.length-1)
            img=0
        setCurrentImage(img)
       
    }

    function previousImage(){
        let img=currentImage-1
        if (img < 0)
            img=props.urls.length-1
        setCurrentImage(img)
    }


    return (
        <div>
            <div>

                <button onClick={previousImage}> P </button>
                    <img id="imgContent" src={props.urls[currentImage]} alt=""/>
                <button onClick={nextImage}>N</button>
            </div>
            <div>{currentImage+1}/{props.urls.length}</div>
        </div>
    );
};

export default ImagesSlider;