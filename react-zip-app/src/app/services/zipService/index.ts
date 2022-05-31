import { apolloClient } from "../../graphql";
import { GET_TOP_FIVE } from "./queries";
import { getTopFive } from "./__generated__/getTopFive";
import { getZipInformation } from "./__generated__/getZipInformation";
class ZipService {
  public async getTopFive(): Promise<getTopFive[]> {
    const response = await apolloClient
      .query({ query: GET_TOP_FIVE })
      .catch((err) => { throw err; });

    if (response && response.data && response.data.cars)
      return response.data as getTopFive[];

    return [];
  } 

  public async getZipInfo(countryCode: string, zipCode: string): Promise<getZipInformation | null> {
    const response = await apolloClient
      .query({ query: GET_TOP_FIVE, variables: { countryCode, zipCode } })
      .catch((err) => { throw err; });

    if (response && response.data && response.data.cars)
      return response.data as getZipInformation;

    return null;
  }
}

export default new ZipService();
