import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Places } from './places';

@Entity({ name: 'Zip' })
@ObjectType()
export class Zip {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  postcode: string;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  countryabbreviation: string;

  @Field(() => [Places])
  places: Places[];
}
