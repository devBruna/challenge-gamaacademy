import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tests' }) 
export class TestEntity {
    
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

    @Column({ type: 'varchar', length: '80', unique: true }) 
    title: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'current_timestamp(6)' })
    createdAt: Date

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'current_timestamp(6)', onUpdate: 'current_timestamp(6)' })
    updatedAt: Date 

}