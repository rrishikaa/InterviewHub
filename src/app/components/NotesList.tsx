"use client";

import { useState } from "react";
import DisplayNotes from "./displayNote";
import {NotesAction} from "@/reducers/useReducer"




type NoteListProp={

    notes:{[notesId:number]: {title:string, bodytext:string}}
    onSubmitSuccess:()=>void;
    dispatch: React.Dispatch<NotesAction>;
}

export default function NotesList({notes, onSubmitSuccess}:NoteListProp){


const [open, setOpen] = useState<boolean>(false);
const [selectedNoteId, setSelectedNoteId] = useState<number | null>(null);  

const handleClick = (id:string)=>{
    setSelectedNoteId(Number(id));
    setOpen(true);
    console.log("isOpen", open);
    console.log("NoteId" ,selectedNoteId)


}
 



const handleUpdate = ()=>{  
    setOpen(false);
    console.log("openHykjfhd",open);
    onSubmitSuccess();
}
    return (
        <div className="mt-8 w-250 h-100 p-4 flex border border-fuchsia-50 rounded-xl ml-auto ">
          
             <ul>
                <div className="flex flex-col gap-4 w-240 p-8" >
      {Object.entries(notes).map(([id, note]) => (
        
        <li key={id} className="flex  p-2 border border-fuchsia-50 rounded-xl"  onClick={()=>handleClick(id) }>
         
           {note.title} 
          
        </li>
      ))}
      </div>
    </ul>
    {open && selectedNoteId !== null && (
          
         <DisplayNotes
            
            notesId={selectedNoteId} 
            notes={notes} 
            onSubmitSuccess={handleUpdate} dispatch={()=>{}}/>)}
        </div>
        
       
    )
}