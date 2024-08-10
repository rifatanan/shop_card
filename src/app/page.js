'use client';
import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();

    const [navData, setNavData] = useState([]);

    // useEffect(() => {
    //     console.log(localStorage.getItem('userName'));
    //     if (localStorage.getItem('userName')) {
    //         setNavData(localStorage.getItem('userName'));
    //     }
    // }, []);

    const handleAddToCard = product => {
        console.log(localStorage.getItem('authToken'));
        if (localStorage.getItem('userName')) {
            setNavData(prevArray => {
                const updatedArray = [...prevArray, product];
                return updatedArray;
            });
            localStorage.setItem('allItem', navData);
        } else {
            router.push('/login');
        }
    };

    return (
        <div>
            <NavBar refNav={navData} />
            <ProductList refProduct={handleAddToCard} />
        </div>
    );
}

export default page;
