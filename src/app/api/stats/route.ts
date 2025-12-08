

import { NextResponse } from 'next/server';
import {mockdata} from '../../lib/mockdata'

export async function GET(){
    const {numOfQues, numOfNotes, lastQuizScore} = mockdata;
    return NextResponse.json({
        numOfQues: numOfQues,
        numOfNotes: numOfNotes,
        lastQuizScore: lastQuizScore
    });
}

