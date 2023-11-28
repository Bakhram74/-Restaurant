import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672332323/NetflixApp/chiken_burger_ncsmeh.webp',
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323859/NetflixApp/caesar-salad-with-tuna-30216-1_noflfd.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672322923/NetflixApp/chicken_tenders_quel6y.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/chinese_pizza_kgnbo1.jpg',
        }

    ]
    const [currentIndex, setCurrentIndex] = useState(2)
    const prevSlider = () => {
        const isFirstSlider = currentIndex === 0
        const newSlider = isFirstSlider?sliders.length -1 : currentIndex-1
        setCurrentIndex(newSlider)
    }
    const nextSlider = () => {
        const isLastSlider = currentIndex === sliders.length-1
        const newSlider = isLastSlider?0 : currentIndex+1
        setCurrentIndex(newSlider)
    }
    const moveSlideIndex=(slideIndex:number)=>{
        setCurrentIndex(slideIndex)
    }
    return (
        <div className={'h-[500px] w-full p-4 relative group'}>
            <div className={'w-full h-full rounded-2xl bg-center bg-cover duration-500'}
                 style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
            ></div>
            <div
                className={'hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full -translate-x-0 translate-y-[-50%] bg-orange-700 p-2  cursor-pointer'}>
                <BsChevronCompactLeft onClick={prevSlider}/>
            </div>
            <div
                className={'hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full -translate-x-0 translate-y-[-50%] bg-orange-700 p-2  cursor-pointer'}>
                <BsChevronCompactRight onClick={nextSlider}/>
            </div>
            <div className={'flex justify-center top-4 py-2'}>
                {
                    sliders.map((s,i)=>(
                        <div className={'text-2xl cursor-pointer'} key={s.url}>
                            <RxDotFilled onClick={()=>moveSlideIndex(i)}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Featured;