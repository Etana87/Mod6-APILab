import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from '#common/components';
import { Character } from './Character.vm';

interface Props {
  Character: Character;
  onSave: (Character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { Character, onSave } = props;

  return (
    <Formik onSubmit={onSave} initialValues={Character} enableReinitialize={true}>
      {() => (
        <Form>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="bestSentence" label="Best Sentence" />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
