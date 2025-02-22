import React from 'react';
import { Character } from '../Character/Character.vm';

interface Props {
  CharacterCollection: Character[];
  onEdit: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { CharacterCollection, onEdit } = props;

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <ul>
        {CharacterCollection.map((character) => (
          <li key={character.id}>
            {character.name}{' '}
            <button onClick={() => onEdit(character.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
