import type { IGrading } from "./IGrading";

export interface IQuizData {
    quizId: string,
    title: string,
    question: string,
    inputs: string[],
    grading: IGrading[],
    answer: string,
}