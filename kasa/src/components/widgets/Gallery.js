import React,{useState} from 'react';
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
        <div className='slider-banner'>
            <img src={props.urls[currentImage]} alt=""/>
            <div className='imgsOnSlider'>
                <button className='arrow--left' onClick={previousImage}></button>
                <button className='arrow--right' onClick={nextImage}></button>
                <div className='sliderNumber'>{currentImage+1}/{props.urls.length}</div>
            </div>
        </div>
    );
};

export default ImagesSlider;