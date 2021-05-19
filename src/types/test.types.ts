
import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'

// Request Types
export interface requestTestInputs {
    title: string,
    questions: Array<requestTestQuestionInputs>
}

export interface requestTestQuestionInputs {
    title: string,
    description?: string,
    orderPosition: number,
    choices?: Array<requestQuestionChoiceInputs>
}

export interface requestQuestionChoiceInputs {
    text: string,
    isCorrect: number
}

// Create SGBD Types

export interface createTestInputs {
    title: string,
}

export interface createTestQuestionInputs {
    title: string,
    description?: string,
    orderPosition: number,
    test: TestsEntity
}

export interface createQuestionChoiceInputs {
    text: string,
    isCorrect: number,
    question: TestQuestionsEntity
}

