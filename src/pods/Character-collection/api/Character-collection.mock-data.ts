import { CharacterEntityApi } from './Character-collection.api-model';

export const mockCharacterCollection: CharacterEntityApi[] = [
  {
    id: '1',
    type: 'Character',
    name: 'W Seattle',
    created: new Date(1464777092747),
    modified: new Date(1464777092747),
    address1: '1112 4th Ave',
    airportCode: 'SEA',
    amenityMask: 7798785,
    city: 'Seattle',
    confidenceRating: 5,
    countryCode: 'US',
    deepLink:
      'http://www.travelnow.com/templates/55505/Characters/213497/overview?lang=en&amp;currency=USD&amp;standardCheckin=null/null/null&amp;standardCheckout=null/null/null',
    highRate: 210,
    CharacterId: 213497,
    CharacterInDestination: true,
    CharacterRating: 4,
    location: {
      latitude: 47.60688,
      longitude: -122.33361,
    },
    locationDescription: 'Near Pike Place Market',
    lowRate: 175,
    metadata: {
      path: '/Characters/8',
    },
    postalCode: 98101,
    propertyCategory: 1,
    proximityDistance: 11.09939,
    proximityUnit: 'MI',
    rateCurrencyCode: 'USD',
    shortDescription:
      'With a stay at W Seattle, you&apos;ll be centrally located in Seattle, steps from Seattle Public Library and Safeco Headquarters. This 4-star Character is close to Pike Place',
    stateProvinceCode: 'WA',
    thumbNailUrl: '/thumbnails/284304_50_t.jpg',
    tripAdvisorRating: 4,
    tripAdvisorRatingUrl:
      'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-12345-4.gif',
  },
  {
    id: '2',
    type: 'Character',
    name: 'Character Monaco Seattle, a Kimpton Character',
    created: new Date(1464777092694),
    modified: new Date(1464777092694),
    address1: '1101 4th Ave',
    airportCode: 'SEA',
    amenityMask: 1310720,
    city: 'Seattle',
    confidenceRating: 52,
    countryCode: 'US',
    deepLink:
      'http://www.travelnow.com/templates/55505/Characters/132138/overview?lang=en&amp;currency=USD&amp;standardCheckin=null/null/null&amp;standardCheckout=null/null/null',
    highRate: 489,
    CharacterId: 132138,
    CharacterInDestination: true,
    CharacterRating: 4,
    location: {
      latitude: 47.60682,
      longitude: -122.33358,
    },
    locationDescription: 'Near Pike Place Market',
    lowRate: 189,
    metadata: {
      path: '/Characters/6',
    },
    postalCode: 98101,
    propertyCategory: 1,
    proximityDistance: 11.097676,
    proximityUnit: 'MI',
    rateCurrencyCode: 'USD',
    shortDescription:
      'With a stay at Character Monaco Seattle, a Kimpton Character, you&apos;ll be centrally located in Seattle, steps from Seattle Public Library and Safeco Headquarters. This 4-star',
    stateProvinceCode: 'WA',
    thumbNailUrl: '/thumbnails/62800_122_t.jpg',
    tripAdvisorRating: 4.5,
    tripAdvisorRatingUrl:
      'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-12345-4.gif',
  },
];
