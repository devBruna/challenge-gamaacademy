import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'questions_choices' }) 
export class QuestionChoiceEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'tinytext' }) 
    text: string

    @Column({ name: 'is_correct', type: 'int', precision: 1, unsigned: true }) 
    isCorrect: number

    @Column({ name: 'question_id', type: 'int', unsigned: true }) 
    questionId: number

}