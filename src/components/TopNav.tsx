import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill, BsPercent, BsPerson} from "react-icons/bs";
import {TbTrack, TbTruckReturn} from "react-icons/tb";
import {MdHelp, MdOutlineFavorite} from "react-icons/md";
import {FaGoogleWallet} from "react-icons/fa";

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
                    <span className={'font-bold'}>Eats</span>
                </h1>
                <div className={'hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'}>
                    <p className={'text-white bg-orange-700 p-2 text-bold rounded-full'}>Free</p>
                    <p className={'text-bold p-2 '}>Delivery</p>
                </div>
            </div>
            <div className={'pl-1 bg-gray-200 flex items-center rounded-full w-[200px] sm:w-[400px] lg:w-[500px]'}>
                <AiOutlineSearch size={25}/>
                <input type="text" placeholder={'поиск блюдо'}
                       className={'bg-transparent p-2 w-full focus:outline-none'}/>
            </div>
            <button className={'bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full border-none'}>
                <BsFillCartFill size={25}/> Cart
            </button>
            {sideNav ? <div className={'fixed bg-black/60 w-full h-screen top-0 left-0 z-10'} onClick={()=>setSideNav(false)}></div> : ("")}
            <div className={
                sideNav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200"
                    : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200"}>

                <AiOutlineClose size={25} onClick={() => setSideNav(false)}
                                className={'absolute top-4 right-4 cursor-pointer'}/>
                <h1 className={'text-2xl p-4'}>Yum <span className={'text-orange-700 font-bold'}>Eats</span></h1>
                <nav>
                    <ul className={'flex flex-col p-4 text-gray-900'}>
                        <li className={'flex p-4 text-xl'}>
                            <BsPerson size={25} className={'bg-black rounded-full text-white mr-4'}/>
                            My Account
                        </li>
                        <li className={'flex p-4 text-xl'}>
                            <TbTruckReturn size={25} className={'bg-black rounded-full text-white mr-4'}/>
                           Delivery
                        </li>
                        <li className={'flex p-4 text-xl'}>
                            <MdOutlineFavorite size={25} className={'bg-black rounded-full text-white mr-4'}/>
                            My Favorite
                        </li>
                        <li className={'flex p-4 text-xl'}>
                            <FaGoogleWallet size={25} className={'bg-black rounded-full text-white mr-4'}/>
                            My Wallet
                        </li>
                        <li className={'flex p-4 text-xl'}>
                            <MdHelp size={25} className={'bg-black rounded-full text-white mr-4'}/>
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TopNav;