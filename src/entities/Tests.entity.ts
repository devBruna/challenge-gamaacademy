import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { TestQuestionsEntity } from './TestQuestions.entity'
@Entity({ name: 'tests' }) 
export class TestsEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'varchar', length: '80', unique: true }) 
    title: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'current_timestamp(6)' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'current_timestamp(6)', onUpdate: 'current_timestamp(6)' })
    updatedAt: Date

    @OneToMany(() => TestQuestionsEntity, question=> question.test)
    questions: TestQuestionsEntity[]

}