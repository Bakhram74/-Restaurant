import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from "react-icons/bs";

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    return (
        <div className={'max-w-[1520px] flex justify-between p-4 items-center mx-auto '}>
            <div className={'flex items-center'}>
                <div className={'cursor-pointer'} onClick={() => setSideNav(!sideNav)}>
                    <AiOutlineMenu size={25}/>
                </div>
                <h1 className={'text-2xl sm:text-3xl lg:text-4xl px-2'}>
                    Yum
                    <span>Eats</span>
                </h1>
                <div className={'hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'}>
                    <p className={'text-white bg-orange-700 p-2 text-bold rounded-full'}>Free</p>
                    <p className={'text-bold p-2 '}>Delivery</p>
                </div>
            </div>
            <div className={'bg-gray-200 flex items-center rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'}>
                <AiOutlineSearch size={25}/>
                <input type="text" placeholder={'поиск блюдо'}
                       className={'bg-transparent p-2 w-full focus:outline-none'}/>
            </div>
            <button className={'bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full border-none'}>
                <BsFillCartFill size={25}/> Cart
            </button>

        </div>
    );
};

export default TopNav;