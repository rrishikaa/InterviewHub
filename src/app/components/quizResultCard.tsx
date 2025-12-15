import Link from "next/link";

interface ResultProps {

    title: string;
    score:number;

}

export default function QuizResultCard ({title, score}: ResultProps){

   
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-xl w-[420px] h-60 text-center items-center justify-center ">
            
             <h2 className="text-center p-4 font-bold text-2xl text-black">{title}</h2>
             <h2 className="text-center p-4 font-bold text-lg text-black">Your Score : {score}</h2>
             <Link href="/dashboard">
             <button className=" mt-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8] w-24">Return </button>
             </Link>
        </div>
        </div>
    )
}