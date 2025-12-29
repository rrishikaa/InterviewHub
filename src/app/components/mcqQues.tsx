"use client";

import QuizResultCard from "./quizResultCard";
import {useState ,useEffect} from "react";
import { useReducer } from "react";
import { answerReducer } from "@/reducers/useReducer";

interface QuesProps {
    id:number;
    question: string;
    options: string[];
    ans: number;
}



export default function McqQues() {
    
    
   

    const questions : QuesProps[]=[
        {id:1 , question: "What is your name?" , options:["Rishika", "Priya" ,"Sejal", "Tara"] ,ans:3},
        {id:2 , question: "What is your State?" , options:["UP", "MP" ,"Karnataka", "Rajasthan"] ,ans:0},
        {id:3 , question: "What is your Gender?" , options:["Male", "Female" ,"Binary", "no specification"] ,ans:1},
        {id:4 , question: "What is your hobby?" , options:["dance", "art" ,"music", "sports"] ,ans:3},
        {id:5 , question: "What is your age?" , options:["5", "9" ,"8", "12"] ,ans:2}

    ];

   

    const[index, setIndex] = useState(0);
   
    const[timeleft, setTimeleft] = useState(120);
    const [clicked, setClicked]= useState<boolean>(false);
    const [disablded, setDisablded]= useState<boolean>(false);


    const[answer, dispatch] = useReducer(answerReducer, {})

    const currentQuestion = questions[index];
    
    const totalScore = Object.values(answer).filter(a => a.correct).length;
   
    const handleSubmit = () =>{

            
            setClicked(true);
            setDisablded(true);
            setTimeleft(0)
            console.log(disablded);
    }

    
    
    
     
     console.log("current", currentQuestion.id);
   
     const handlePrev = () =>{
            if(index > 0 && index <= questions.length - 1){
                setIndex(index-1);
                
            }
            console.log("clicked Prev")
             console.log("prev", currentQuestion.id);
           
           
             console.log("anwer: ", answer);
             
            
    }
    

    const handleNext = () =>{
            if(index >= 0){
                setIndex(index+1);
               
                
               
            }
        
            console.log("clicked Next")
               console.log("answer map", answer); 
    }

    
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeleft(prev => {
                if(prev <= 1) {
                    clearInterval(interval);
                    handleSubmit();
                    return 0;
                }
                return prev - 1 ;
                    
            });
        
        }, 1000);
         
    return () => clearInterval(interval);
    },[]);

   const formattedTime = (seconds:number) =>{
        const minutes = Math.floor(seconds/ 60);
        const sec = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
   };

    return (
        <>
         <div className="w-40 h-10 p-4 flex items-center justify-center border border-fuchsia-50 rounder-3xl ml-auto ">Time : {formattedTime(timeleft)}</div>
        <div className=" mt-8 flex-row  border border-fuchsia-50  rounded-lg shadow-md w-full h-full  justify-center items-center overflow-hidden text-left">
             <div  className=" h-10 w-full  flex items-center px-4 py-4 font-bold text-2xl tracking-wider ">Question {currentQuestion.id}</div>
             <div className="h-0.5 w-full bg-fuchsia-50"></div>
            <div className="flex-row text-lg pl-4 px-3 text-white font-semibold wrap-break-word mt-4">
               
            {currentQuestion?.question}
                
                 </div>
                 
                 <ul className="mt-4 flex-row pl-6 mb-4">
                    {currentQuestion.options.map((option,index) => (
                        <li key= {index} className="text-white ">
                            <input 
                            className="mr-2"
                            id={option}
                            type="radio"
                            name="mcq"
                            value={index}
                            onChange={() =>{
                                dispatch({
                                    type: "SELECT_ANSWER",
                                    questionId:currentQuestion.id,
                                    optionIndex: index,
                                    correctAnswer: currentQuestion.ans
                                })
                            } }
                            checked = {answer[currentQuestion.id]?.selected === index}
                            disabled={answer[currentQuestion.id]?.selected !== undefined && answer[currentQuestion.id]?.selected !== index}
                            />
                            {option}
                            </li>
                        )
                    )}
                     </ul>
                     

                     {answer[currentQuestion.id]!= null && ( answer[currentQuestion.id].selected == currentQuestion.ans? (<div className="mt-4 flex w-full">
                        <h2 className="text-emerald-600 font-semibold p-2 py-2">Correct Answer!! </h2>
                        </div> ):(<div className="mt-4 flex w-full p-2 py-2">
                             <h2 className="text-orange-700 font-semibold">The answer you selected is wrong.</h2></div>))}
                            
            </div>
            {clicked && <div className="p-4 item-center justify-center z-50 top-12">
                               <QuizResultCard title= "Quiz Completed." score={totalScore}/></div>}
            <div className="flex gap-4 p-8 items-center justify-center">
                
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#e7e9f6] w-24" onClick={handlePrev}>
                    Previous
                </button>
                
                {currentQuestion.id == questions.length ?
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#e7e9f6] w-24" onClick={handleSubmit}>
                    Submit
                </button>  
                :
                
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#e7e9f6] w-24" onClick={handleNext}>
                    Next
                </button> } 
               
                
            </div>
    </>
    );
}