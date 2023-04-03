import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  duration?: number;
  aspectRatio?: number;
  style?: object;
}

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  duration = 500,
  aspectRatio = 1,
  style,
}) => {
  const progress = useSharedValue(0);
  const rotationY = progress.value * 180;

  const frontAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotationY}deg` }],
    backfaceVisibility: 'hidden',
  }));

  const backAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { rotateY: `${rotationY + 180}deg` },
      { translateY: -StyleSheet.hairlineWidth },
    ],
    backfaceVisibility: 'hidden',
  }));

  const toggleFlip = () => {
    progress.value = withTiming(progress.value ? 0 : 1, { duration });
  };

  return (
    <TouchableOpacity onPress={toggleFlip} activeOpacity={1}>
      <View style={[{ aspectRatio }, style]}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          {front}
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          {back}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    ...StyleSheet.absoluteFillObject,
  },
  cardBack: {
    position: 'absolute',
  },
});

export default FlipCard;
