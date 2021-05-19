export interface createTestInputs {
    title: string,
    questions: Array<createTestQuestionInput>
}

export interface createTestQuestionInput {
    title: string,
    description?: string,
    orderPosition: number,
    choices: Array<createQuestionChoiceInput>
}

export interface createQuestionChoiceInput {
    text: string,
    isCorrect: number
}
