import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from './colors';

interface StainlessSteelProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const StainlessSteel: React.FC<StainlessSteelProps> = ({ style, children }): JSX.Element => {
  return (
    <LinearGradient
      colors={[colors.stainlessSteel.start, colors.stainlessSteel.middle, colors.stainlessSteel.end]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.gradient, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default StainlessSteel;
