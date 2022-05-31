import gql from "graphql-tag";

// export const GET_ALL_CARS = gql`
//   query GetTop {
//     cars {
//       id
//       name
//       mileage
//       gearType
//       gas
//       thumbnailUrl
//       dailyPrice
//       monthlyPrice
//     }
//   }
// `;


export const GET_ZIP_INFO = gql `
  query getZipInformation($zipCode: String!, $countryCode: String){
    zipByCodeAndCountry(zipCode: $zipCode, countryCode: $countryCode) {
      country,
      postcode,
      countryabbreviation,
      places {
        placeName,
        latitude,
        stateAbbreviation,
        longitude,
        latitude,
        state
      }
    }
  }
`;

export const GET_TOP_FIVE =  gql `
query getTopFive($zipCode: String!, $countryCode: String){
  zipByCodeAndCountry(zipCode: $zipCode, countryCode: $countryCode) {
    country,
    postcode,
    countryabbreviation,
    places {
      placeName,
      latitude,
      stateAbbreviation,
      longitude,
      latitude,
      state
    }
  }
}
`; 