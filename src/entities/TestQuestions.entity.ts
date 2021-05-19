import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { TestsEntity } from './Tests.entity'
import { QuestionChoicesEntity } from './QuestionsChoices.entity'
@Entity({ name: 'questions' }) 
export class TestQuestionsEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'varchar', length: '50' }) 
    title: string

    @Column({ type: 'tinytext' }) 
    description: string

    @Column({ type: 'int', precision: 3, unsigned: true }) 
    orderPosition: number

    @ManyToOne(() => TestsEntity, test => test.questions)
    test: TestsEntity

    @OneToMany(() => QuestionChoicesEntity, choice => choice.question)
    choices: QuestionChoicesEntity[]

}