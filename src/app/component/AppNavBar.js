"use client";
import React from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";

const AppNavBar = () => {

    const router=useRouter();
    const Logout = async () => {
        const response = await fetch("/api/login")
        const json = await response.json();
        if (json['status'] === true) {
            router.replace("/")
        }
    }

    return (
        <div>
           
                <div className="p-5">
                   
                        
                    <button className='border border-indigo-500 px-4 py-2 hover:bg-indigo-400 hover:text-white rounded-lg' onClick={Logout}>Logout</button>
                        
                </div>
            
        </div>
    );
};

export default AppNavBar;