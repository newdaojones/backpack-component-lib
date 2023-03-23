import React, { useState } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { ContextButtonStyles } from '../style/styles';
import HapticFeedback from 'react-native-haptic-feedback';


export type ContextButtonProps = {
  label: string;
  onPress: () => void;
}

const ContextButton: React.FC<ContextButtonProps> = ({ label, onPress }) => {
  const [backgroundColor, setBackgroundColor] = useState(ContextButtonStyles.contextButton.backgroundColor);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handlePress = () => {
    HapticFeedback.trigger('impactLight', options);
    setBackgroundColor('red'); // Set the color you want to flash
    onPress();

    setTimeout(() => {
      setBackgroundColor(ContextButtonStyles.contextButton.backgroundColor);
    }, 200); // Reset the color after a short delay
  };

  const buttonStyle: ViewStyle = {
    ...ContextButtonStyles.contextButton,
    backgroundColor,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={ContextButtonStyles.contextButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ContextButton;
