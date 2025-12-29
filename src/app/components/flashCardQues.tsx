"use client";

import {  useState } from "react";

interface QuesProps{
    id :number ,
    question: string,
    answer: string
}

interface AnswerMap{
    [questionId:number]:boolean
    
}



export default function FlashcardQues(){

    const questions : QuesProps[]=[
        {id:1 , question: "What is your name?" , answer:"My name is Tara"},
        {id:2 , question: "What is your State?" , answer:"I am from UP"},
        {id:3 , question: "What is your Gender?" , answer:"I am a Female"},
        {id:4 , question: "What is your hobby?" , answer:"I love sports"},
        {id:5 , question: "What is your age?" , answer:"I am 8 years old."} 
    ]

    const [index, setIndex] = useState(0);
    
    const [storeanswer, setStoreanswer] = useState<AnswerMap | null>({});
     
    


    const currentQuestion = questions[index];
    const showAnswer = storeanswer ? !!storeanswer[currentQuestion.id] : false;
console.log("showAnswer", showAnswer);
    
 
    const handleShowAnswer = () => {
       
        setStoreanswer(prev =>({...prev, [currentQuestion.id]: true}))
    }

 

    const handleNext =()=>{
        if(index < questions.length -1){
            setIndex(index+1);
            if(showAnswer){
            setStoreanswer({...storeanswer , [currentQuestion.id] : true})}
            
        }
    };

    const handlePrev =()=>{
        if(index > 0 ){
            setIndex(index -1);
        }
    }
    return (
        <div className=" mt-8 flex-row  border border-fuchsia-50  rounded-lg shadow-md w-full h-full  justify-center items-center overflow-hidden text-left">
             <div className="flex flex-row h-20 w-full bg-gray-300 p-4">
            <h2 className=" h-10 w-full flex items-center px-2 py-4  font-bold text-2xl text-[#013664] ">{`Question ${currentQuestion.id} : ${currentQuestion.question}`}
            </h2>
            {!showAnswer &&
             <button className="border-2 border-[#004E92] px-4 py-2 bg-[#ffffff] text-[#020e7b] rounded hover:bg-[#f5f6fb] w-40 tracking-wider" onClick ={handleShowAnswer} >
                    Show Answer
                </button>}

             </div>
               <div  className=" h-40 w-full  flex  px-3   ">
                {showAnswer &&
                <div className="flex gap-2 px-4 mt-12 font-semi-bold text-xl justify-center">{currentQuestion.answer}</div>}
                
               </div>
             <div className="flex gap-4 p-8 items-center justify-center">
                {currentQuestion.id  != 1 &&         
                <button className="button" onClick ={handlePrev} >
                    Previous
                </button>}
                
            
                {questions.length  != currentQuestion.id &&         
                <button className="button" onClick ={handleNext} >
                    Next
                </button> }
               
                
            </div>
            </div>
            
            
    );
}