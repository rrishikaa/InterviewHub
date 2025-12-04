"use client";

import { useContext, useEffect , createContext, useState } from "react";

type User= {
    email: string|null;
    
}

type AuthContextType=  {
    user: User|null;
    login: (email:string)  => void;
    logout:() =>void;
}

 

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User|null>(null);

    useEffect(()=>{
        const saveUser = localStorage.getItem("user");
        if(saveUser){
            setUser(JSON.parse(saveUser));
        }
    },[]
    );

    function login(email:string ){
        const newUser:User ={email};
         setUser(newUser);
        localStorage.setItem("user" , JSON.stringify(newUser));
    }
    

    function logout(){
        setUser(null);
        localStorage.removeItem("user");
    }

return(
    <AuthContext.Provider value = {{user, login, logout}}>
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