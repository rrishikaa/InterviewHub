export interface AnswerMap { 
    [questionId: number]:{selected:number , correct: boolean}
};

export type AnswerAction = {
    type: "SELECT_ANSWER",
    questionId:number,
    optionIndex:number,
    correctAnswer:number
}


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