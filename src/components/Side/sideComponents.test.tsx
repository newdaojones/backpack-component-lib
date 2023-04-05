// src/components/Side/sideComponents.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';

import AssetSide from './Asset/AssetSide';
import BadgeSide from './Badge/BadgeSide';
import PersonaSide from './Persona/PersonaSide';
import PluginSide from './Plugin/PluginSide';

import {
  assetContentData,
  badgeContentData,
  personaContentData,
  pluginContentData,
} from '../../data/sideContentData';

const sideComponents = [
  { Component: AssetSide, data: assetContentData },
  { Component: BadgeSide, data: badgeContentData },
  { Component: PersonaSide, data: personaContentData },
  { Component: PluginSide, data: pluginContentData },
];

describe('Side components render correctly', () => {
  sideComponents.forEach(({ Component, data }) => {
    test(`${Component.name} renders the correct title and description`, () => {
      const { getByText } = render(<Component />);

      expect(getByText(data.title)).toBeTruthy();
      expect(getByText(data.description)).toBeTruthy();
    });
  });
});
