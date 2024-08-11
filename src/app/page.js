'use client';
import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();
    const [navData, setNavData] = useState([]);
    const [items, setItem] = useState([]);
    const [toggle, setToggel] = useState(0);

    useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem('allItem'));
        if (storedItem && localStorage.getItem('userName')) {
            setItem(storedItem);
        }
    }, [toggle]);

    const handleAddToCard = product => {
        if (localStorage.getItem('userName')) {
            setNavData(prevArray => {
                const updatedArray = [...prevArray, product];
                return updatedArray;
            });
            localStorage.setItem('allItem', JSON.stringify(navData));
            if (toggle === 0) setToggel(1);
            else if (toggle === 1) setToggel(0);
        } else {
            router.push('/login');
        }
    };

    return (
        <div>
            <NavBar refNav={items} />
            <ProductList refProduct={handleAddToCard} />
        </div>
    );
}

export default page;
