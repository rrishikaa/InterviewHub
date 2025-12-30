"use client";

import { useState } from "react";
import NotesForm from "@/app/components/notesForm";

export default function MyNotes(){

    const[clicked , setClicked] = useState(false);
    
    const handleAddNote =()=>{
        
        setClicked(prev=> !prev);

    }
   
    console.log("clicked", clicked)
   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#000428] to-[#004E92]">
            <h1 className="text-4xl font-bold text-white mt-16 ">My Notes</h1>
            {clicked ? <NotesForm /> :
            <div className="relative ml-auto mt-auto p-28 mb-8 ">
            <button className=" flex items-center justify-center text-[#004E92] p-4 font-medium w-12 h-12 bg-gray-300 rounded-full text-4xl  " onClick={handleAddNote}>+</button> </div>
            }
           
            
            </div>
    );
}