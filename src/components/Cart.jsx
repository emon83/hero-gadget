import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const {cartArray} = useLoaderData();

    console.log(cartArray);
    return (
        <div className='flex min-h-screen items-center justify-start bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'></h2>
            </div>
        </div>
    );
};

export default Cart;