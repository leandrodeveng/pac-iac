import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User  {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    photoUrl: string

    @Column({ nullable: true })
    createdAt: Date

    @Column({ nullable: true })
    updatedAt: Date

    @Column({ nullable: true })
    deletedAt: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}