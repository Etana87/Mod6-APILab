// import { Character } from './Character.api-model';
// import { Lookup } from '#common/models';
// import { mockCities, mockCharacterCollection } from './Character.mock-data';

// export const getCharacter = async (id: string): Promise<Character> => {
//   return mockCharacterCollection.find((h) => h.id === id);
// };

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

// export const saveCharacter = async (Character: Character): Promise<boolean> => {
//   return true;
// };

import axios from 'axios';
import { Character } from './Character.api-model';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<{ results: Character[] }>(API_URL);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching character collection:', error);
    return [];
  }
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  try {
    const response = await axios.get<Character>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    return null;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.log('Saving character (mocked):', character);
  return true;
};
