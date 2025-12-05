"use client";

import { AuthProvider, useAuth } from "@/app/context/AuthContext"; 
import "./globals.css";
import {useRouter} from 'next/navigation';
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const router = useRouter();
    const {isAuthenticated} = useAuth();
     
    useEffect(()=>{

      if(!isAuthenticated){
        router.replace("/login");

      }
    },[isAuthenticated, router]);

     
   
  return (
    <html lang="en">
      <body
        
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
