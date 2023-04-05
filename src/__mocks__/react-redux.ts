// src/__mocks__/react-redux.ts
import { useSelector as originalUseSelector } from 'react-redux';

export const useSelector = jest.fn(originalUseSelector) as jest.MockedFunction<
  typeof originalUseSelector
>;
