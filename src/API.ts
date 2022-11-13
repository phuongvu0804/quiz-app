import { shuffleArray } from "./utils"

export type QuestionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionState = QuestionType & { answers: string[]}

enum Difficulty {
    Easy = "easy",
    Medium = "medium",
    Hard = "hard",
}

const fetchQuestions = async (amount: number, difficulty: Difficulty)=> {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await ( await fetch(endpoint)).json()
    return data.results.map((set: QuestionType) => (
        {
            ...set,
            answers: shuffleArray([...set.incorrect_answers, set.correct_answer])
        }
    ))
}

export { Difficulty, fetchQuestions }