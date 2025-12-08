
import Card from "@/app/components/card";


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
    <Card title="No. of Questions" content={numOfQues} />
    <Card title="No. of Notes" content={numOfNotes} />
    <Card title="Last Quiz Score" content={lastQuizScore} />
    </div>

    <div className="mt-8 flex space-x-4 justify-center items-center py-8">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            MCQ
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Flahcards
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            My Notes
        </button>

       
    </div>
     
    </div>
  );
}
