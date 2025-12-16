"use client";


import QuizResultCard from "./quizResultCard";
import { useState} from "react";

interface QuesProps {
    id:number;
    question: string;
    options: string[];
    answer: number;
}

interface AnswerMap { 
    [questionId: number]: number
     
    
}

export default function McqQues() {

    const questions : QuesProps[]=[
        {id:1 , question: "What is your name?" , options:["Rishika", "Priya" ,"Sejal", "Tara"] ,answer:3},
        {id:2 , question: "What is your State?" , options:["UP", "MP" ,"Karnataka", "Rajasthan"] ,answer:0},
        {id:3 , question: "What is your Gender?" , options:["Male", "Female" ,"Binary", "no specification"] ,answer:1},
        {id:4 , question: "What is your hobby?" , options:["dance", "art" ,"music", "sports"] ,answer:3},
        {id:5 , question: "What is your age?" , options:["5", "9" ,"8", "12"] ,answer:2}

    ];

   

    const[index, setIndex] = useState(0);
    const[selectedOption, setSelectedOption] = useState<number | null>(null);
    const [score, setScore] = useState<number>(0);
    const [clicked, setClicked]= useState<boolean>(false);
    const [disablded, setDisablded]= useState<boolean>(false);
    const [answer, setAnswer] = useState<AnswerMap >({})



    const currentQuestion = questions[index];
    

    // const showAnswer= answer ? !!answer[currentQuestion.id] : false
    


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const answerone = Number(e.target.value);
        setSelectedOption(answerone);
        

        setAnswer(prev => ({...prev , [currentQuestion.id] :answerone  }))
          
    }
    const handleSubmit = () =>{

            if(selectedOption == currentQuestion.answer)  {
                setScore(score+1)}
            console.log("submit:" ,score)
            setClicked(true);
            setDisablded(true);
            console.log(disablded);
    }

    
    
    
     console.log("selected",selectedOption);
     console.log("current", currentQuestion.id);
   
     const handlePrev = () =>{
            if(index > 0 && index <= questions.length - 1){
                setIndex(index-1);
                
            }
            console.log("clicked Prev")
             console.log("prev", currentQuestion.id);
            if(selectedOption != null){
            setAnswer(prev => ({
                ...prev ,[ currentQuestion.id] : currentQuestion.answer}))
            }
           
             console.log("anwer: ", answer);
            
    }
    

    const handleNext = () =>{
            if(index >= 0){
                setIndex(index+1);
               
                setSelectedOption(null);
                if(selectedOption == currentQuestion.answer)  {
                setScore(score+1)
                console.log("Score:" ,score)
            } 
            }
             if(selectedOption != null){
            setAnswer(prev => ({
                ...prev ,[ currentQuestion.id] : currentQuestion.answer}))
            }
            console.log("clicked Next")
               console.log("answer map", answer); 
    }

 


    return (
        <>
        <div className=" mt-8 flex-row  border border-fuchsia-50  rounded-lg shadow-md w-full h-full  justify-center items-center overflow-hidden text-left">
             <div  className=" h-10 w-full  flex items-center justify center px-3 py-4 font-bold text-2xl ">Question {currentQuestion.id}</div>
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
                            onChange={handleOnChange}
                            checked = {selectedOption === index}
                            disabled={selectedOption != null && selectedOption !== index}
                            />
                            {option}
                            </li>
                        )
                    )}
                     </ul>
                     

                     {selectedOption!= null && ( selectedOption == currentQuestion.answer? (<div className="mt-4 flex w-full">
                        <h2 className="text-emerald-600 font-semibold p-2 py-2">Correct Answer!! </h2>
                        </div> ):(<div className="mt-4 flex w-full p-2 py-2">
                             <h2 className="text-orange-700 font-semibold">The answer you selected is wrong.</h2></div>))}
                            
            </div>
            {clicked && <div className="p-4 item-center justify-center z-50 top-12">
                               <QuizResultCard title= "Quiz Completed." score={score}/></div>}
            <div className="flex gap-4 p-8 items-center justify-center">
                
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8] w-24" onClick={handlePrev}>
                    Previous
                </button>
                
                {currentQuestion.id == questions.length ?
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8] w-24" onClick={handleSubmit}>
                    Submit
                </button>  
                :
                
                <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8] w-24" onClick={handleNext}>
                    Next
                </button> }
               
                
            </div>
    </>
    );
}