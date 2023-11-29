import React from 'react';
import {categories} from '../data/data'

const Categories = () => {

    return (
        <div className={'max-w-[1520px] m-auto px-4 pb-4'}>
            <h1 className={'font-bold text-orange-500 pb-2 text-2xl text-center'}>Trending Categories</h1>
            <div className={'grid grid-cols-2 md:grid-cols-6 my-5 mx-2 gap-5'}>
                {categories.map(item=>
                        <div key={item.id} className={'p-4 flex justify-center items-center hover:scale-105 duration-300'}>
                            <img className={'object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl'}
                                src={item.image} alt={item.name}/>
                        </div>
                )}
            </div>
        </div>
    );
};

export default Categories;