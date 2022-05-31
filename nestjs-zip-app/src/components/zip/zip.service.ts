import {
  HttpService,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Zip } from './entities/zip';
import { map } from 'rxjs/operators';
import { Places } from './entities/places';

@Injectable()
export class ZipService {
  constructor(
    @InjectRepository(Zip) private zipRepository: Repository<Zip>,
    private httpService: HttpService,
  ) {}

  public async getAllZip(): Promise<Zip[]> {
    this.httpService
      .get('http://api.zippopotam.us/us/90210')
      .subscribe((response) => console.log(response.data));

    return await this.zipRepository.find({ take: 5 }).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async getLastFiveSearch() {
    return await this.zipRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
    return null;
  }

  public async getZipByCodeAndCountry(
    countryCode = 'us',
    zipCode?: string,
  ): Promise<Zip> {
    debugger;
    return this.httpService
      .get(`http://api.zippopotam.us/${countryCode}/${zipCode}`)
      .pipe(
        map((response) => response.data),
        map((data: Zip) => {
          const placesFormat = data.places.map((place: Places) => {
            const { latitude, longitude, state } = place;
            return {
              latitude,
              longitude,
              state,
              stateAbbreviation: place['state abbreviation'],
              placeName: place['place name'],
            };
          });
          const zipResponse: Zip = {
            ...data,
            countryabbreviation: data['country abbreviation'],
            postcode: data['post code'],
            places: placesFormat,
          };
          return zipResponse;
        }),
      )
      .toPromise();
  }
}
