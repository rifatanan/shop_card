'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function NavBar (props) {
	
	// console.log(props);
	// let price =0;
	// props.refNav.map((item, index) => {
	// 	price = price + Math.round(parseFloat(item.price));
	// })

	const [item, setItem] = useState('');

	useEffect(() => {
		// Retrieve the userName from localStorage
		const storedItem = localStorage.getItem('allItem');
		if (storedItem) {
			setItem(storedItem);
		}
	}, []);
	console.log(item);
  

  return (
	<div className="navbar p-2 bg-neutral-500">
		<div className="flex-1">
			<a className="btn btn-ghost text-4xl">Shop Card</a>
		</div>
		<div className="flex-none">
			<div className="dropdown dropdown-end pt-2">
				<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
					<div className="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
					</div>
				</div>
				<div
					tabIndex={0}
					className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-96 shadow">
					<div className="card-body">
						{ /*props && 
						props.refNav.map((item, index) => (		
							<div key={index} className='block'>
								<span className="text-lg font-bold">{item.title}</span> 
								<span className="text-lg ml-3">Price: {item.price}</span>
							</div>
						)) */}
						<span className="text-info">Subtotal: ${}</span>
						<div className="card-actions">
							<button className="btn btn-primary btn-block">View cart</button>
						</div>
					</div>
				</div>
			</div>
			<div className='flex gap-2 justify-between w-50'>
				{!localStorage.getItem('userName')?(
					<Link href={'/login'}>
						<button className='p-2 hover:bg-neutral-300 no-underline text-black rounded-sm'>LogIn</button>
					</Link>
				):
				(<button
					className='p-2 hover:bg-neutral-300 no-underline text-black rounded-sm'
					onClick={()=>{
						localStorage.clear('userName')
						}}>LogOut
				</button> )
				}
			</div>
		</div>
	</div>
  )
}

export default NavBar