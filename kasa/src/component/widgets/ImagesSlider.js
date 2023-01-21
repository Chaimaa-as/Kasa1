import React,{useState} from 'react';

const ImagesSlider = (props) => {

    const [currentImage,setCurrentImage]=useState(0)

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
                <div onClick={previousImage}> P </div>
                    <img id="imgContent" src={props.urls[currentImage]} />
                <div onClick={nextImage}>N</div>
            </div>
            <div>{currentImage+1}/{props.urls.length}</div>
        </div>
    );
};

export default ImagesSlider;