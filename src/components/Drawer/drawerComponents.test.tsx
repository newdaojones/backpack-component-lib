// src/components/Drawer/__tests__/drawerComponents.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';

import AssetDrawer from './Asset/AssetDrawer';
import BadgeDrawer from './Badge/BadgeDrawer';
import PersonaDrawer from './Persona/PersonaDrawer';
import PluginDrawer from './Plugin/PluginDrawer';

import {
  assetDrawerData,
  badgeDrawerData,
  personaDrawerData,
  pluginDrawerData,
} from '../../data/drawerListData';

const drawerComponents = [
  { Component: AssetDrawer, data: assetDrawerData },
  { Component: BadgeDrawer, data: badgeDrawerData },
  { Component: PersonaDrawer, data: personaDrawerData },
  { Component: PluginDrawer, data: pluginDrawerData },
];

describe('Drawer components render correctly', () => {
  drawerComponents.forEach(({ Component, data }) => {
    test(`${Component.name} renders the list of items`, () => {
      const { getByText } = render(<Component />);

      data.forEach((item) => {
        expect(getByText(item)).toBeTruthy();
      });
    });
  });
});
