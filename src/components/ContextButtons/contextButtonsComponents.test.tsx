// src/components/ContextButtons/__tests__/contextButtonsComponents.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AssetContextButtons from './Asset/AssetContextButtons';
import BadgeContextButtons from './Badge/BadgeContextButtons';
import PersonaContextButtons from './Persona/PersonaContextButtons';
import PluginContextButtons from './Plugin/PluginContextButtons';

const mockStore = configureStore([]);

const store = mockStore({
  view: {
    currentView: '',
  },
});

describe('ContextButtons components render correctly and respond to button clicks', () => {
  test('AssetContextButtons renders and responds to button clicks', () => {
    const props = {
      sendReceiveLabel: 'Send/Receive',
      txHistoryLabel: 'Transaction History',
      cancelLabel: 'Cancel',
      addAssetLabel: 'Add Asset',
    };
    const { getByText } = render(
      <Provider store={store}>
        <AssetContextButtons {...props} />
      </Provider>,
    );

    Object.values(props).forEach((label) => {
      const button = getByText(label);
      expect(button).toBeTruthy();
      fireEvent.press(button);
    });
  });

  test('BadgeContextButtons renders and responds to button clicks', () => {
    const props = {
      viewBadgeLabel: 'View Badge',
      modifyBadgeLabel: 'Modify Badge',
      cancelLabel: 'Cancel',
      createBadgeLabel: 'Create Badge',
    };
    const { getByText } = render(
      <Provider store={store}>
        <BadgeContextButtons {...props} />
      </Provider>,
    );

    Object.values(props).forEach((label) => {
      const button = getByText(label);
      expect(button).toBeTruthy();
      fireEvent.press(button);
    });
  });

  test('PersonaContextButtons renders and responds to button clicks', () => {
    const props = {
      connectLabel: 'Connect',
      onRampLabel: 'On Ramp',
      bankCardLabel: 'Bank Card',
      paycastLabel: 'Paycast',
    };
    const { getByText } = render(
      <Provider store={store}>
        <PersonaContextButtons {...props} />
      </Provider>,
    );

    Object.values(props).forEach((label) => {
      const button = getByText(label);
      expect(button).toBeTruthy();
      fireEvent.press(button);
    });
  });

  test('PluginContextButtons renders and responds to button clicks', () => {
    const props = {
      detailsLabel: 'Details',
      signaturesLabel: 'Signatures',
      cancelLabel: 'Cancel',
      runPluginLabel: 'Run Plugin',
    };
    const { getByText } = render(
      <Provider store={store}>
        <PluginContextButtons {...props} />
      </Provider>,
    );

    Object.values(props).forEach((label) => {
      const button = getByText(label);
      expect(button).toBeTruthy();
      fireEvent.press(button);
    });
  });
});
