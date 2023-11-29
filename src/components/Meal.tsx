import React from 'react';
import {mealData} from "../data/data";
import {ArrowSmallRightIcon} from "@heroicons/react/24/solid";

const Meal = () => {
    return (
        <div className={'max-w-[1520px] m-auto px-4 py-12'}>
            <h1 className={'font-bold text-orange-500 py-2 text-2xl text-center'}>Our Meal</h1>
            <div className={'grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'}>
                {mealData.map(item=>{
                    return(
                        <div className={'border-none hover:scale-105 duration-300'} key={item.id}>
                            <img src={item.image} alt={item.name}
                                 className={'w-full h-[200px] object-cover rounded-lg'}
                            />
                            <div className={'flex justify-between py-2 px-4'}>
                                <p className={'font-bold'}>{item.name}</p>
                                <p className={'bg-orange-700 rounded-full  -mt-10 border-8 py-4 px-2 text-white font-bold'}>{item.price}</p>
                            </div>
                            <div className={'pl-2 py-4 -mt-7'}>
                                <p className={'flex items-center text-indigo-600 cursor-pointer'}>View More<ArrowSmallRightIcon className={'w-5 ml-2'}/></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Meal;