import { Args, Query, Resolver } from '@nestjs/graphql';
import { ZipService } from './zip.service';
import { Zip } from './entities/zip';
import { Observable } from 'rxjs';

@Resolver()
export class ZipResolver {
  constructor(private zipService: ZipService) {}

  @Query(() => [Zip])
  public async zip(): Promise<Zip[]> {
    return await this.zipService.getAllZip().catch((err) => {
      throw err;
    });
  }

  @Query(() => Zip)
  public async zipByCodeAndCountry(
    @Args('zipCode', { type: () => String }) zipCode: string,
    @Args('countryCode', { type: () => String, defaultValue: 'US' })
    countryCode?: string,
  ) {
    debugger;
    const result = await this.zipService
      .getZipByCodeAndCountry(countryCode, zipCode)
      .catch((err) => {
        throw err;
      });
    return result;
  }

  @Query(() => Zip)
  public async getLastFiveSearch() {
    const result = await this.zipService.getLastFiveSearch().catch((err) => {
      throw err;
    });
    return result;
  }
}
