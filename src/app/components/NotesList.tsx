"use client";

import { useState } from "react";
import DisplayNotes from "./displayNote";

// import { useReducer } from "react";
// import {notesArrayReducer} from "@/reducers/useReducer";


type NoteListProp={

    notes:{[notesId:number]: {title:string, bodytext:string}}

}

export default function NotesList({notes}:NoteListProp){

const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);  
    return (
        <div className="mt-8 w-250 h-100 p-4 flex border border-fuchsia-50 rounded-xl ml-auto ">
          
             <ul>
                <div className="flex flex-col gap-4 w-240 p-8" >
      {Object.entries(notes).map(([id, note]) => (
        
        <li key={id} className="flex  p-2 border border-fuchsia-50 rounded-xl">
          <button
            className="text-fuchsia-50 font-semibold mr-4"
            onClick={() => setSelectedNoteId(Number(id))}
          >
           {selectedNoteId !== null && selectedNoteId === Number(id) && 
          
         <DisplayNotes 
            
            notesId={Number(id)} 
            notes={notes} 
            onSubmitSuccess={()=>{}} dispatch={()=>{}}/>}
           {note.title} 
          </button>
        </li>
      ))}
      </div>
    </ul>
        </div>
        
       
    )
}