"use client"

import {useAuth } from "@/context/AuthContext";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Login(){
    const {login} = useAuth();
    const [email, setEmail]= useState("")

    const router = useRouter();

    const handleSubmit= (e: React.FormEvent)=>{
        e.preventDefault();
        login(email);
        router.push("/");
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
        
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
            <input 
                type ="email" placeholder="Enter your email" 
                className="p-4 border border-gray-400 rounded-lg w-80 text-neutral-950" 
                value={email} 
                onChange ={(e)=>setEmail(e.target.value)}
                required />
           
            <button type="submit" className="w-full p-4 flex justify-center bg-amber-700 text-lg text-blue-50 rounded-md" >Login</button> 
             </form>
            </div>
       
    )
};