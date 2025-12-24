export interface AnswerMap { 
    [questionId: number]: number 
};

export type AnswerAction = {
    type: "SELECT_ANSWER",
    questionId:number,
    optionIndex:number
}

export const answerReducer = (
    state:AnswerMap,
    action: AnswerAction
):AnswerMap  =>  {
    switch(action.type){
        case "SELECT_ANSWER" :
            if(state[action.questionId] !== undefined){
                return state;}
                return {...state, [action.questionId]: action.optionIndex};

        default:
            return state;

    }
    
};