import FlashcardQues from '@/app/components/flashCardQues';

export default function Flashcards(){
   
    return (
        <div className="flex flex-col items-center  min-h-screen bg-linear-to-br from-[#000428] to-[#004E92] pt-20 ">
            <h1 className="text-4xl font-bold text-white mt-12 ">Revision FlashCards</h1>
            <p className="text-white mt-4">Test yourself. </p>
             <div className="mt-4 w-full p-12  ">
                 <FlashcardQues/>
                   </div>
                   </div>
                  
    );
}