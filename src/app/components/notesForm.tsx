"use client";

import { useState } from "react";



export default function NotesForm(){


    const[formData, setFormData] = useState("");
    const[title, setTitle] = useState("");
    const[bodytext, setBodytext] = useState("");


    const handleSubmit= (e: React.FormEvent)=>{
        e.preventDefault();
        localStorage.setItem("formData", formData)
    }

    return(
        <div className="w-full h-full px-32 mb-24">
            <form 
            onSubmit={handleSubmit}
            className="w-full min-h-screen mt-12 px-16 py-12 border border-fuchsia-50 rounded-xl flex flex-col gap-2">
                <div className="relative w-full">
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-widest">Title</h2>
                    <textarea
                    rows={1}
                    name="title"
                    className="text-fuchsia-50 p-2 border border-fuchsia-50 rounded-md w-full resize-none flext items-center justify-center"
                    placeholder="Enter your title." 
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    required/>
                </div>
                <div className="relative w-full mt-4">
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-widest ">Body</h2>
                    <textarea
                    name="body"
                    className="text-fuchsia-50 p-2 border border-fuchsia-50 rounded-md w-full h-60 resize-none"
                    placeholder="Your text here." 
                    value={bodytext}
                    onChange={(e)=>{setBodytext(e.target.value)}}
                    required/>
                </div>
            </form>
        </div>
    )

}