'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

function ProductList(props) {
	const [dummyData, setDummyData] = useState(null);

	useEffect( ()=>{
		(async()=>{
			const data =await fetch('https://dummyjson.com/products')
			const dataJson  = await data.json();
			setDummyData(dataJson);
		})()
	},[])

  	return (
		<div className='p-2'>
			<div className=' grid grid-cols-4'>
				{dummyData &&
				dummyData.products &&
				dummyData.products.length > 0 ? (
				dummyData.products.map((item, index) => (
					<div key={index} className="m-3 max-w-sm rounded overflow-hidden shadow-lg">
						<Image
						src= {item.images[0]}
						className='bg-slate-200'
						alt='Image'
						height={0} 
						width={0}
						priority={true}
						unoptimized
						style={{ width: '400px', height: '300px' }}
						/>
						
						<div className="px-6 py-4 overflow-hidden" style={{ height: '160px' }}>
							<div className="font-bold text-xl mb-2">{item.title}</div>
							<p className="text-gray-700 text-base">{item.description}</p>				
						</div>
						<p className='px-6 pt-3'><b>Price: ${item.price}</b></p>
						<div className="pl-6 pb-3 flex gap-2">
							<div>
								<button 
								className="btn btn-primary" 
								onClick={()=>props.refProduct(item)}
								>Add to Card</button>
							</div>
							<div>
								<Link  href={`/blog/${item.id}`} className='text-white'>
									<button className="btn btn-primary"	> Details </button>
								</Link>
							</div>
						</div>
					</div>
					))
				):( <span className="loading loading-spinner loading-lg"></span>)
			}
			</div>
		</div>
	)
}

export default ProductList