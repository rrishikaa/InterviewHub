"use client";

import { useAuth } from "@/app/context/AuthContext";
import {useRouter} from "next/navigation";
import  Link  from "next/link";
import { useEffect } from "react";

export default function Navbar(){

        const router = useRouter(); 
        const {logout, isAuthenticated} = useAuth();

        const handleLogin = ()=>{
            router.push("/login");
        }


        const handleLogout = (e:React.FormEvent)=>{
        
          e.preventDefault();
          logout();       
        }
        
        useEffect(()=>{
            console.log("Navbar Check: isAuthenticated =", isAuthenticated);
        },[isAuthenticated]);
        

    return(
        <nav className="w-full h-16 bg-gray-300 flex items-end-center px-4 text-white sticky top-0 z-50 ">
                <Link href="/" >
                <h1 className="text-[#004E92] text-2xl font-bold text-start align-middle p-4">
                    InterviewHUB
                </h1>
            </Link>
            
            {isAuthenticated ?
            <button onClick={handleLogout} className="ml-auto pr-4 text-[#004E92] hover:active: font-bold">Logout </button>
            :
            <button onClick={handleLogin} className="ml-auto pr-4 text-[#004E92] font-bold">Login</button>}
        </nav> 
    );
}