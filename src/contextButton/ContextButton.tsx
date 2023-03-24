import React, { useState } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { ContextButtonStyles } from '../style/styles';
import HapticFeedback from 'react-native-haptic-feedback';
import { colors } from '../style/colors';


export type ContextButtonProps = {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
}

const ContextButton: React.FC<ContextButtonProps> = ({ label, onPress, backgroundColor = ContextButtonStyles.contextButton.backgroundColor }) => {
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState(backgroundColor);

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const handlePress = () => {
    HapticFeedback.trigger('impactLight', options);
    setButtonBackgroundColor(colors.caution); // Set the color you want to flash
    onPress();

    setTimeout(() => {
      setButtonBackgroundColor(backgroundColor);
    }, 200); // Reset the color after a short delay
  };

  const buttonStyle: ViewStyle = {
    ...ContextButtonStyles.contextButton,
    backgroundColor: buttonBackgroundColor,
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <Text style={ContextButtonStyles.contextButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ContextButton;
