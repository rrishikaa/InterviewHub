"use client";

import DisplayNotes from "./displayNote";

// import { useReducer } from "react";
// import {notesArrayReducer} from "@/reducers/useReducer";


type NoteListProp={

    notes:{[notesId:number]: {title:string, bodytext:string}}

}

export default function NotesList({notes}:NoteListProp){

const handleClick=()=>{

    console.log("note clicked");
}

    return (
        <div className="mt-8 w-250 h-100 p-4 flex border border-fuchsia-50 rounded-xl ml-auto ">
             <ul>
                <div className="flex flex-col gap-4 w-240 p-8" >
      {Object.entries(notes).map(([id, note]) => (
        
        <li key={id} className="flex  p-2 border border-fuchsia-50 rounded-xl">
          
        <button key={id} onClick={()=> <DisplayNotes notesId={Number(id)} notes={notes} onSubmitSuccess={handleClick} dispatch={() => {}} /> } className="text-white font-semibold text-left ">
           {note.title} 
          </button>
        </li>
        
      ))}
      </div>
    </ul>
        </div>
        
       
    )
}