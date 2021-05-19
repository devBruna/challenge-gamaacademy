
import { TestsEntity } from '../entities/Tests.entity'
import { TestQuestionsEntity } from '../entities/TestQuestions.entity'
import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'

// Request Types
export interface requestTestInputs {
    title: string,
    questions: Array<requestTestQuestionInput>
}

export interface requestTestQuestionInput {
    title: string,
    description?: string,
    orderPosition: number,
    choices?: Array<requestQuestionChoiceInput>
}

export interface requestQuestionChoiceInput {
    text: string,
    isCorrect: number
}

// Create SGBD Types

export interface createTestInputs {
    title: string,
}

export interface createTestQuestionInput {
    title: string,
    description?: string,
    orderPosition: number,
    test: TestsEntity
}

export interface createQuestionChoiceInput {
    text: string,
    isCorrect: number,
    question: TestQuestionsEntity
}

