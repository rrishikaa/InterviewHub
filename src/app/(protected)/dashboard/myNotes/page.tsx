"use client";

import { useState } from "react";
import { useReducer } from "react";
import {notesArrayReducer} from "@/reducers/useReducer";
import NotesForm from "@/app/components/notesForm";
import NotesList from "@/app/components/NotesList";

export default function MyNotes(){

    const[clicked , setClicked] = useState(false);
    const [notes, dispatch] = useReducer(notesArrayReducer, {});


    const HandleFormSubmit = ()=>{
        setClicked(false);
    }
    
    const handleAddNote =()=>{
        
        setClicked(prev=> !prev);

    }
   
    console.log("clicked", clicked)
   
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#000428] to-[#004E92]">
            <h1 className="text-4xl font-bold text-white mt-16 ">My Notes</h1>
            {clicked ? <NotesForm onSubmitSuccess={HandleFormSubmit} dispatch={dispatch}/> :
            
             <div className=" items-center p-4 mb-8  ">
            <NotesList notes={notes}/>
            <div className=" ml-auto mt-auto p-4 mb-8   ">
            <button className=" flex items-center justify-center ml-auto mt-auto  text-[#004E92] p-4 font-medium w-12 h-12 bg-gray-300 rounded-full text-4xl  " onClick={handleAddNote}>+</button> </div>
            </div>
            }
           
            
            </div>
    );
}