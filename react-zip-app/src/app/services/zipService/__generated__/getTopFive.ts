/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTopFive
// ====================================================

export interface getTopFive_zipByCodeAndCountry_places {
  __typename: "Places";
  placeName: string;
  latitude: string;
  stateAbbreviation: string;
  longitude: string;
  state: string;
}

export interface getTopFive_zipByCodeAndCountry {
  __typename: "Zip";
  country: string;
  postcode: string;
  countryabbreviation: string;
  places: getTopFive_zipByCodeAndCountry_places[];
}

export interface getTopFive {
  zipByCodeAndCountry: getTopFive_zipByCodeAndCountry;
}

export interface getTopFiveVariables {
  zipCode: string;
  countryCode?: string | null;
}
