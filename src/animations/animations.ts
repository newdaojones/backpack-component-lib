import { useSharedValue, withTiming } from "react-native-reanimated";

export const useCardAnimation = () => {
  const progress = useSharedValue(0);

  const start = () => {
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 500 });
  };

  return { progress, start };
};
