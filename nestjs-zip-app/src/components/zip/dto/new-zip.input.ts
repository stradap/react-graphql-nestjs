import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewZipInput {
  @Field()
  id: string;

  @Field()
  postcode: string;

  @Field()
  country: string;

  @Field()
  countryabbreviation: string;
}
