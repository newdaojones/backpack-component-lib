// src/components/Card/Card.test.tsx
import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import Card from './Card';

describe('Card', () => {
  it('renders the Card component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Card />
      </Provider>
    );

    expect(getByTestId('card')).toBeDefined();
  });

  it('renders the Card component with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Provider store={store}>
        <Card style={customStyle} />
      </Provider>
    );

    expect(getByTestId('card')).toHaveStyle(customStyle);
  });

  it('renders the Card component with children', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Card>
          <React.Fragment>
            <Text>Child 1</Text>
            <Text>Child 2</Text>
          </React.Fragment>
        </Card>
      </Provider>
    );

    expect(getByTestId('card')).toBeDefined();
    expect(getByText('Child 1')).toBeDefined();
    expect(getByText('Child 2')).toBeDefined();
  });

  it('renders the Card component with custom testID', () => {
    const customTestID = 'custom-card';
    const { getByTestId } = render(
      <Provider store={store}>
        <Card testID={customTestID} />
      </Provider>
    );

    expect(getByTestId(customTestID)).toBeDefined();
  });
});
