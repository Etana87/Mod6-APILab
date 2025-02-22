import React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { getCharacterCollection } from '../Character/api/Character.api';
import { CharacterCollectionComponent } from '../Character-collection/Character-collection.component';

export const CharacterCollectionContainer = () => {
  const [characterCollection, setCharacterCollection] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getCharacterCollection().then(setCharacterCollection);
  }, []);

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  return (
    <CharacterCollectionComponent
      CharacterCollection={characterCollection}
      onEdit={handleEdit}
    />
  );
};
