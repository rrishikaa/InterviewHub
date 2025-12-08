"use client";

import { useContext, createContext, useState, useEffect } from "react";

type User= {
    email: string|null;
    password: string|null;
    
}

type AuthContextType=  {
    user: User|null;
    login: (email:string, password:string)  => void;
    logout:() =>void;
    isAuthenticated: boolean;
}

 

const AuthContext = createContext<AuthContextType>({} as AuthContextType);



export function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User|null>(null);
    const isAuthenticated = !!user;
   
     

    function login(email:string , password:string){
        const newUser:User ={email , password};
         setUser(newUser);
        localStorage.setItem("user" , JSON.stringify(newUser));
        
    }
    useEffect(() => {
    console.log("User :", user);
    }, [user]);


    function logout(){
        setUser(null);
        localStorage.removeItem("user");
        
   
    }

return(
    <AuthContext.Provider value = {{user, login, logout, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
)
}

export function useAuth(){
    const ctx = useContext(AuthContext);
    if(!ctx){
        throw new Error("useAuth must be within AuthProvider");
        
    }
    return ctx;
}

