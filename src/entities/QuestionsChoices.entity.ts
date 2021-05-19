import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { TestQuestionsEntity } from './TestQuestions.entity'
@Entity({ name: 'questions_choices' }) 
export class QuestionChoicesEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'tinytext' }) 
    text: string

    @Column({ name: 'is_correct', type: 'int', precision: 1, unsigned: true }) 
    isCorrect: number

    @ManyToOne(() => TestQuestionsEntity, question => question.choices)
    question: TestQuestionsEntity

}