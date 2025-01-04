'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NavBar() {

    const [currentDateTime, setcurrentDateTime] = useState(``);
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }
            setcurrentDateTime(now.toLocaleDateString('en-US', options) + `` + now.toLocaleTimeString('en-US', { hour12: false }));
        };

        updateDateTime();
        const interValId = setInterval(updateDateTime, 1000);
        return () => clearInterval(interValId)
    }, []);


    return (
        <header className=' text-gray-400 body-font shadow-lg bg-blue-100'>
            <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
                <div className='flex-1 text-black'>
                    <span>{currentDateTime}</span>

                </div>
                <nav className='md:ml-auto flex flex-wrap items-center text-black justify-center gap-5'>
                    <Link href={"/"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105 hover:underline'> Home </Link>
                    <Link href="/about" className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105 hover:underline'> About </Link>
                    <Link href={"/blog"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105 hover:underline'> Blog </Link>
                    <Link href={"/contact"} className='mr-5 hover:text-blue-700 transition-colors duration-300 transform hover:scale-105 hover:underline'> Contact </Link>

                </nav>









            </div>
        </header>
    )
}

