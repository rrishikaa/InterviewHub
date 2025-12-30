"use client";

import { useEffect, useState } from "react";
import { useReducer } from "react";
import {notesArrayReducer} from "@/reducers/useReducer"
import { useRouter } from 'next/navigation';


export default function NotesForm(){

    const[title, setTitle] = useState("");
    const[bodytext, setBodytext] = useState("");
    const [notes, dispatch] = useReducer(notesArrayReducer, [])
    const router = useRouter();
    const formData = title + " " + bodytext;

    const HandleSubmit= (e: React.FormEvent)=>{
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(notes));
        setTitle("");
        setBodytext("");
        const notesId = Date.now();
        dispatch({
            type: "ADD_ANSWER",
            notesId:notesId,
            notesData:formData

        })
        router.push("/dashboard/myNotes")
        
    }
    

    useEffect(() => {
        console.log('Notes updated:', notes);
      }, [notes]);


    return(
        <div className="realative w-full h-full px-16 lg:px-48 mb-24">
            <form 
            className=" relative w-full h-140 mt-12 px-20 py-12 border border-fuchsia-50 rounded-xl flex flex-col gap-2">
                <div className="relative w-full">
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-widest">Title</h2>
                    <textarea
                    id="1"
                    rows={1}
                    name="title"
                    className="text-fuchsia-50 p-2 border border-fuchsia-50 rounded-md w-full resize-none flext items-center justify-center bg-white/10"
                    placeholder="Enter your title." 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    maxLength={250}
                    required/>
                </div>
                <div className="relative w-full mt-4">
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-widest ">Body</h2>
                    <textarea
                    name="body"
                    className="text-fuchsia-50 p-2 border border-fuchsia-50 rounded-md w-full h-60 resize-none bg-white/10"
                    placeholder="Your text here." 
                    value={bodytext}
                    onChange={(e)=>{setBodytext(e.target.value)}}
                    required/>
                </div>
                <button className="button mt-4"
                    onClick={HandleSubmit}>Save</button>
            </form>
           
        </div>
    )

}