'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Login =() => {
	const router = useRouter();
    let [data, setData] = useState({ userName: '', password: '' });

    const inputOnChange = (userName, value) => {
        setData(data => ({
            ...data,
            [userName]: value,
        }));
    };

    const onSubmit =async e => {
        e.preventDefault();

		const logInData = await fetch('https://dummyjson.com/user/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: 'emilys',
				password: 'emilyspass',
				expiresInMins: 30,
			}),
		});
        
		const logInDataResponse = await logInData.json();

		if (logInDataResponse.username === data.userName) {
			localStorage.setItem('authToken', logInDataResponse.token);
			localStorage.setItem('userName', data.userName);
			router.push('/')
		}
		else {
			alert('Login Failed');
		}
    };

    return (
        <div>
            <div className="flex justify-center items-center bg-slate-400 h-screen w-screen">
                <div className="w-96 p-6 bg-slate-200 rounded-md shadow-lg">
                    <div className="flex justify-center">
                        <FontAwesomeIcon
                            className="h-6 w-10 mt-2"
                            icon={faUser}
                        />
                        <h1 className="text-4xl block text-center font-semibold">
                            LogIn
                        </h1>
                    </div>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="mt-3">
                            <label className="block text-base mb-2">
                                User Name
                            </label>
                            <input
                                onChange={e => {
                                    inputOnChange('userName', e.target.value);
                                }}
                                className="border rounded text-base w-full px-2 py-1 focus:outline-none text-white focus:ring-0 focus:border-gray-600"
                                type="text"
                                id="username"
                                placeholder="Enter your user name"
                            ></input>
                        </div>
                        <div className="mt-3">
                            <label
                                className="block text-base mb-2"
                            >
                                Password
                            </label>
                            <input
                                onChange={e => {
                                    inputOnChange('password', e.target.value);
                                }}
                                className="border rounded text-base w-full px-2 py-1 text-white focus:outline-none focus:ring-0 focus:border-gray-600"
                                type="text"
                                id="password"
                                placeholder="Enter password"
                            ></input>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-green-600 w-full mt-4 p-1 rounded border-2 border-green-600 hover:bg-green-500 focus:bg-transparent"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
