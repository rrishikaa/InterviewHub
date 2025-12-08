"use client";



interface CardProps {
    title: string ;
    content: number;
}

export default function Card({title, content }:CardProps){
    // const [total, seTotal] = useState(0);

    return (
        <div className="flex flex-col  p-6 bg-white rounded-lg shadow-md w-40 h-30 justify-center items-center overflow-hidden text-center">
        {title && 
        <h2 className="text-lg text-emerald-900 font-semibold wrap-break-word">{title} </h2>}

        {content && 
        <h2 className="text-2xl text-blue-500 font-bold ml-2 wrap-break-word">{content}</h2>}
          
        </div>
    )
};