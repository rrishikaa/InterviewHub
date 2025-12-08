"use client"

import {useAuth } from "@/app/context/AuthContext";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Login(){
    const {login} = useAuth();
    const [email, setEmail]= useState("");
    const[password,setPassword]= useState("");

    const router = useRouter();
  

    const handleSubmit= (e: React.FormEvent)=>{
     
        e.preventDefault();
        login(email,password);
        router.push("/dashboard");
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <div className="mb-8 border border-gray-300 rounded-lg p-8 shadow-lg">
                {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                    Login to InterviewHUB
                </h1>
            </div> */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
            <input 
                type ="email" placeholder="Enter your email" 
                className="p-4 border border-gray-400 rounded-lg w-80 text-neutral-950" 
                value={email} 
                onChange ={(e)=>setEmail(e.target.value)}
                required />
                   <input 
                type ="password" placeholder="Your password here." 
                className="p-4 border border-gray-400 rounded-lg w-80 text-neutral-950" 
                value={password} 
                onChange ={(e)=>setPassword(e.target.value)}
                required />
           
            <button type="submit" className="w-full p-4 flex justify-center bg-[#004E92] text-lg text-blue-50 rounded-md hover:shadow-lg hover:bg-[#0061b6]" >Login</button> 
             </form>

             </div>
            </div>
       
    )
};