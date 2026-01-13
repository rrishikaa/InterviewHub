"use client";

import { useState , useEffect} from "react";
// import { useReducer } from "react";
import { NotesAction} from "@/reducers/useReducer";


type NotesFormProps = {
    onSubmitSuccess: () => void;
    dispatch: React.Dispatch<NotesAction>;
    notesId:number;
    notes:{[notesId:number]: {title:string, bodytext:string}};
  };


  



     // const [notes, dispatch] = useReducer(notesArrayReducer, [])
export default function DisplayNotes({onSubmitSuccess,dispatch, notesId, notes}:NotesFormProps ){

    const[title, setTitle] = useState(notes[notesId] ? notes[notesId].title : "");
    const[bodytext, setBodytext] = useState(notes[notesId] ? notes[notesId].bodytext : "");

   

 useEffect(() => {
        setTitle(notes[notesId] ? notes[notesId].title : "");
        setBodytext(notes[notesId] ? notes[notesId].bodytext : "");
      }, [notesId , notes]);

const formData = {
    title: title,
    bodytext: bodytext
};

    const HandleSubmit= (e: React.FormEvent)=>{
        e.preventDefault();
        // localStorage.setItem("formData", JSON.stringify(notes));
        if(notes[notesId]){
            dispatch({
                type:"UPDATE_ANSWER",
                notesId,
                notesData:formData
            });
        }
        else{
            const newid = Date.now();
            dispatch({
                type:"ADD_ANSWER",
                notesId:newid,
                notesData:formData
                
            })
            }
        setTitle("");
        setBodytext("");
       
        onSubmitSuccess();
        console.log("formData", formData)
    
        
    }
    


    return(
        <div className="fixed mt-20 top-0 left-0  w-full h-full px-16 lg:px-48 mb-24  z-10 t-16 bg-linear-to-br from-[#000428] to-[#004E92]">
            <form 
            className=" relative w-full h-140 mt-12 px-20 py-12 border border-fuchsia-50 rounded-xl flex flex-col gap-2">
                <div className="relative w-full">
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-wider">Title</h2>
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
                    <h2 className="text-fuchsia-50 pl-1.5 mb-2 tracking-wider ">Body</h2>
                    <textarea
                    name="body"
                    className="text-fuchsia-50 p-2 border border-fuchsia-50 rounded-md w-full h-60 resize-none bg-white/10"
                    placeholder="Your text here." 
                    value={bodytext}
                    onChange={(e)=>{setBodytext(e.target.value)}}
                    required/>
                </div>
                <button className="button mt-4"
                    onClick={HandleSubmit}>Update</button>
            </form>
           
        </div>
    )

}