import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'questions' }) 
export class AccountsEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'varchar', length: '50' }) 
    title: string

    @Column({ type: 'tinytext' }) 
    description: string

    @Column({ type: 'int', precision: 3, unsigned: true }) 
    orderPosition: number

    @Column({ name: 'test_id', type: 'int', unsigned: true }) 
    testId: number

}