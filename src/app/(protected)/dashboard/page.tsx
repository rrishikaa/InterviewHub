import Card from "@/components/card"

export default function Dashboard() {
  return (

    <div className="flex flex-col sm:gap-4 gap:8 min-h-screen items-center  bg-zinc-50 font-sans dark:bg-black">
      <h1  className="mt-16 sm:mt-8  text-4xl font-bold text-indigo-800  sm:text-5xl">
        InterviewHUB
        </h1>   
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mt-16 sm:mt-4 text-center">
      Welcome to the Dashboard!
    </h1>
    <div className="flex flex-col sm:flex-row gap-4 space-x-4 mt-6 text-lg text-gray-700 dark:text-gray-300 justify-center items-center">
    <Card title="No. of Questions" content={42} />
    <Card title="No. of Notes" content={15} />
    <Card title="Last Quiz Score" content={27} />
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
