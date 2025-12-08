"use client";

import { useAuth } from "@/app/context/AuthContext"; 

import {useRouter} from 'next/navigation';
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
    const {isAuthenticated} = useAuth();

    console.log("Protected Layout Check: isAuthenticated =", isAuthenticated);
    const router = useRouter();
     
    useEffect(()=>{

      if(!isAuthenticated){
        router.replace("/login");

      }
    },[isAuthenticated, router]);

   if (!isAuthenticated) return null;
   
  return ( 
       <>
        {children}
      </> 
  );
}
