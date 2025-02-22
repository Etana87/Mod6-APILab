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
