import { View } from 'react-native';
import { ViewProps } from 'react-native';
import { ComponentClass } from 'react';

declare module 'react-native-reanimated' {
  export const View: ComponentClass<ViewProps>;
}
