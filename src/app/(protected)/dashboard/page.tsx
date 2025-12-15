
import Card from "@/app/components/card";

import Link from "next/link";


export async function GETdata(){

  const res = await fetch('http://localhost:3000/api/stats',
    {
      cache: "no-store"
    });
  const data = res.json();
  return data;

}
  

export default async function Dashboard() {



  const {numOfQues, numOfNotes, lastQuizScore} =  await GETdata();

  return (

    <div className="flex flex-col sm:gap-4 gap:8 min-h-screen items-center  bg-linear-to-br from-[#000428] to-[#004E92]">
      {/* <h1  className="mt-16 sm:mt-8 px-4 py-2 text-4xl font-bold text-gray-900 dark:text-white   sm:text-5xl">
        InterviewHUB
        </h1>    */}
    <h1 className="text-4xl font-bold text- sm:text-5xl mt-16 sm:mt-4 text-center pt-16">
      Welcome to the Dashboard!
    </h1>
    <div className="flex flex-col sm:flex-row gap-4 space-x-4 mt-6 pt-12 text-lg text-gray-700 dark:text-gray-300 justify-center items-center">
    <Card title=" Questions" content={numOfQues} />
    <Card title=" Notes" content={numOfNotes} />
    <Card title="Quiz Score" content={lastQuizScore} />
    </div>

    <div className="mt-8 flex space-x-4 justify-center items-center py-8">
        <Link href="/dashboard/mcq">
        <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8]">
            MCQ
        </button>
        </Link>
        <Link href="/dashboard/flashcard">
        <button className="px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8]">
            Flahcards
        </button>
        </Link> 
        <Link href="/dashboard/myNotes">
        <button className=" px-4 py-2 bg-[#ffffff] text-[#000428] rounded hover:bg-[#dfe0e8]">
            My Notes
            </button>
        </Link>
        

       
    </div>
     
    </div>
  );
}
