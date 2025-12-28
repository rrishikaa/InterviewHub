"use client"

import {useAuth } from "@/app/context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export default function Login(){
    const {login} = useAuth();
    const [email, setEmail]= useState("");
    const[password,setPassword]= useState("");
    const[showPassword, setShowPassword]= useState(false);

    const router = useRouter();
  

    const handleSubmit= (e: React.FormEvent)=>{
     
        e.preventDefault();
        login(email,password);
        router.push("/dashboard");
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <div className="mb-8 border border-gray-300 rounded-lg p-8 shadow-lg">
                {/* {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                    Login to InterviewHUB
                </h1> */}
           
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center justify-center">
            <div className="w-80">
            <h2 className="text-black mr-auto pl-2 ">Email</h2>
            </div>
            <div className="w-80">
            <input 
                name="email"
                type ="email" 
                placeholder="Enter your email" 
                className="p-4 border border-gray-400 rounded-lg w-80 text-neutral-950" 
                value={email} 
                onChange ={(e)=>setEmail(e.target.value)}
                required />
            </div>
            <div className="w-80">
            <h2 className="text-black mr-auto pl-2 mt-4 ">Password</h2>
            </div>
            <div className="relative w-80">
                <input
                     name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Your password here."
                    className="p-4 border border-gray-400 rounded-lg w-full text-neutral-950"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    pattern="(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}"
                    required
                />
                <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
                </div>

            <button type="submit" className="w-full p-4 mt-2 flex justify-center bg-[#004E92] text-lg text-blue-50 rounded-md hover:shadow-lg hover:bg-[#0061b6]" >Login</button> 
             </form>

             </div>
            </div>
       
    )
};