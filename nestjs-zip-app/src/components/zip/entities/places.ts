import { Field, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
export class Places {
  @Column()
  @Field()
  placeName: string;

  @Column()
  @Field()
  longitude: string;

  @Column()
  @Field()
  latitude: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  stateAbbreviation: string;
}
