export interface CharacterEntityApi {
  id: string;
  type: string;
  name: string;
  created: Date;
  modified: Date;
  address1: string;
  airportCode: string;
  amenityMask: number;
  city: string;
  confidenceRating: number;
  countryCode: string;
  deepLink: string;
  highRate: number;
  CharacterId: number;
  CharacterInDestination: boolean;
  CharacterRating: number;
  location: {
    latitude: number;
    longitude: number;
  };
  locationDescription: string;
  lowRate: number;
  metadata: {
    path: string;
  };
  postalCode: number;
  propertyCategory: number;
  proximityDistance: number;
  proximityUnit: string;
  rateCurrencyCode: string;
  shortDescription: string;
  stateProvinceCode: string;
  thumbNailUrl: string;
  tripAdvisorRating: number;
  tripAdvisorRatingUrl: string;
}
