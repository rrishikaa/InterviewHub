

import McqQues from "@/app/components/mcqQues";


export default function Mcq(){

    
   
    return (
        <div className="flex flex-col items-center  min-h-screen bg-linear-to-br from-[#000428] to-[#004E92] pt-20 ">
            <h1 className="text-4xl font-bold text-white mt-12 ">MCQ</h1>
            <p className="text-white mt-4">Start the quiz and finish it within 10 min.</p>
           
            <div className="mt-2 w-full p-12  ">
            <McqQues />
            </div>
            </div>
    );
}