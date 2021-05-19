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

// SGBD Types

export interface createTestInputs {
    title: string,
}

export interface createTestQuestionInput {
    title: string,
    description?: string,
    orderPosition: number,
    testId: number
}

export interface createQuestionChoiceInput {
    text: string,
    isCorrect: number,
    questionId: number
}

