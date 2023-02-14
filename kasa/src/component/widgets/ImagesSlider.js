import React,{useState,useEffect} from 'react';
// import chevron_carousel_left from '../../assets/imgs/chevron_carousel_left.png';

const ImagesSlider = (props) => {

    const [currentImage,setCurrentImage]=useState(0)


    // useEffect(() => {
    //     const timer = setTimeout(nextImage, 5000);
    //     return () => clearTimeout(timer);
    //   });

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
        <div className='sliderBanner'>
            <div className='imgsOnSlider'>

                <button className='left-arrow' onClick={previousImage}>
                </button>

                {/* <img src={chevron_carousel_left} alt="" /> */}
                    <img id="imgContent" src={props.urls[currentImage]} alt=""/>
                <button className='right-arrow' onClick={nextImage}>
                </button>
            </div>
            <div className='imgNumber'>{currentImage+1}/{props.urls.length}</div>
        </div>
    );
};

export default ImagesSlider;