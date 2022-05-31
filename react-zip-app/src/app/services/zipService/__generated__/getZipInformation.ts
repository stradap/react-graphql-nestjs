/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getZipInformation
// ====================================================

export interface getZipInformation_zipByCodeAndCountry_places {
  __typename: "Places";
  placeName: string;
  latitude: string;
  stateAbbreviation: string;
  longitude: string;
  state: string;
}

export interface getZipInformation_zipByCodeAndCountry {
  __typename: "Zip";
  country: string;
  postcode: string;
  countryabbreviation: string;
  places: getZipInformation_zipByCodeAndCountry_places[];
}

export interface getZipInformation {
  zipByCodeAndCountry: getZipInformation_zipByCodeAndCountry;
}

export interface getZipInformationVariables {
  zipCode: string;
  countryCode?: string | null;
}
