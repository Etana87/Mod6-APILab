import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  CharacterCollection: string;
  createCharacter: string;
  editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  CharacterCollection: '/Characters',
  createCharacter: '/Characters/create',
  editCharacter: '/Characters/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};
