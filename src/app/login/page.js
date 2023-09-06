"use client"
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {

    const [formValue,SetFormValue]=useState({email:"mahmud.wali29@gmail.com",password:"123"})
    const router=useRouter();

    const inputChange = (name,value) => {
        SetFormValue(formValue=>(
            {
                ...formValue,
                [name]:value
            }
        ))
    }

    const Submit = async (e) => {
        e.preventDefault();
        if(formValue.email.length===0){
            alert("Email Required")
        }
        else if(formValue.password.length===0){
            alert("Password Required")
        }
        else{
            const config = {method: 'POST', body: JSON.stringify(formValue)}
            const response = await fetch("/api/login", config)
            const json=await response.json();
            if(json['status']===true){
                router.replace("/dashboard")
            }
            else {
                alert(json['message'])
            }

        }
    }



    return (

        <div className="container mx auto">
            
            <div className=" border mt-20">
                <div className="p-10">
                    <h1 className='text-center text-2xl uppercase font-bold'>LogIn Page</h1>
                    <form className='' onSubmit={Submit}>
                        <label className="">User Email</label> <br/>
                        <input className="border my-3 p-2" value={formValue.email} onChange={(e)=>inputChange('email',e.target.value)} type="email" placeholder="example@example.com"/><br/>
                        <label className="">User Password</label><br/>
                        <input className="border my-3 p-2" value={formValue.password} onChange={(e)=>inputChange('password',e.target.value)} type="password" placeholder="XXXXXXX"/><br/>
                        <input className="border border-indigo-500 hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg w-32 cursor-pointer" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Page;