import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCharacter } from '../Character/api/Character.api';
import { CharacterComponent } from '../Character/Character.component';
import { createEmptyCharacter, Character } from '../Character/Character.vm';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      getCharacter(id).then((data) => {
        if (data) setCharacter(data);
      });
    }
  }, [id]);

  const handleSave = async (updatedCharacter: Character) => {
    const success = await updateCharacter(updatedCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error saving character');
    }
  };

  return <CharacterComponent Character={character} onSave={handleSave} />;
};