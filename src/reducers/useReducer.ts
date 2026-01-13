export interface AnswerMap { 
    [questionId: number]:{selected:number , correct: boolean}
};

export type AnswerAction = {
    type: "SELECT_ANSWER",
    questionId:number,
    optionIndex:number,
    correctAnswer:number
};



export const answerReducer = (
    state:AnswerMap,
    action: AnswerAction
):AnswerMap  =>  {
    switch(action.type){
        case "SELECT_ANSWER" :
            if(state[action.questionId] !== undefined){
                return state;
                }
            
                return {...state, [action.questionId]: {selected:action.optionIndex , correct:action.optionIndex === action.correctAnswer}};
                

        default:
            return state;

    }
};


export interface NotesMap {
    [notesId:number]: {title:string, bodytext:string};
    
};

export type NotesAction = {
    type: "ADD_ANSWER",
    notesId: number,
    notesData: {title:string, bodytext:string}
};


export const notesArrayReducer =(
    state:NotesMap,
    action: NotesAction

):NotesMap => {
 
    switch(action.type){
        case "ADD_ANSWER":
        if(!action.notesData){
            return state;
        }
        return {...state, [action.notesId]:action.notesData};

        default:
            return state;

        case "UPDATE_ANSWER":
            const{notesID , notesData}= action;
            return{
                ...state, [notesId]:notesData,
            }
        
    }
   
};

// export interface DisplayNotesMap {
//     notesId:number;
    
// };

// export type DisplayNotesAction = {
//     type: "DISPLAY_ANSWER",
//     notesId: number,
// };


// export const DisplayNotesReducer =(
//     state:NotesMap,
//     action: NotesAction

// ):NotesMap => {
 
//     switch(action.type){
//         case"DISPLAY_ANSWER":
//         if(!action.notesId){
//             return state;
//         }
//         return {[action.notesId]:action.notesData};

//         default:
//             return state;
        
//     }
   
// };

