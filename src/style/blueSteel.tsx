import React, { ReactNode } from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from './colors';

interface BlueSteelProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const BlueSteel: React.FC<BlueSteelProps> = ({ style, children }): JSX.Element => {
  return (
    <LinearGradient
      colors={[colors.blueSteel.start, colors.blueSteel.middle, colors.blueSteel.end]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0.2, 0.5, 0.8]}
      useAngle={true}
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
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

export default BlueSteel;
