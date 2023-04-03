import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

interface SlideDrawerProps {
  side: React.ReactNode;
  drawer: React.ReactNode;
  slideDistance?: number;
  springConfig?: WithSpringConfig;
}

const SlideDrawer: React.FC<SlideDrawerProps> = ({
  side,
  drawer,
  slideDistance = height * 0.4,
  springConfig = { damping: 20, stiffness: 90 },
}) => {
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event, ctx) => {
      translateY.value = event.translationY;
    },
    onEnd: (event, ctx) => {
      if (Math.abs(event.translationY) > slideDistance / 2) {
        translateY.value = withSpring(
          event.translationY > 0 ? slideDistance : -slideDistance,
          springConfig,
        );
      } else {
        translateY.value = withSpring(0, springConfig);
      }
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>{drawer}</View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.card, animatedStyles]}
        >
          {side}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SlideDrawer;
