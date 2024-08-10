'use client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Details = props => {
    const [dummyData, setDummyData] = useState(null);

    const params = useParams();
    useEffect(() => {
        (async () => {
            const data = await fetch(
                `https://dummyjson.com/products/${params.id}`,
            );
            const dataJson = await data.json();
            setDummyData(dataJson);
        })();
    }, []);

    return (
        <div className="p-2 ">
            {dummyData && (
                <div className="m-10">
                    <div className=" h-600 w-400 flex shadow-md bg-orange-200 rounded">
                        <Image
                            className="w-1/2 "
                            height={300}
                            width={100}
                            src={dummyData.images[0]}
                            unoptimized
                            alt="Product Image"
                            priority={true}
                        />

                        <div
                            className="w-1/2  p-20 rounded-r-md"
                            style={{ background: '#E7E8D8' }}
                        >
                            <p className="text-4xl p-2">{dummyData.title}</p>
                            <p className="p-2">{dummyData.description}</p>
                            <p className="p-2">Rating: {dummyData.rating}</p>
                            <div className="flex justify-between">
                                <p className="p-2">Price: {dummyData.price}$</p>
                                <button className="btn btn-primary">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
