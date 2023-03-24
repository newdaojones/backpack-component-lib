import React, { useState } from 'react';
import { View } from 'react-native';
import ContextButton, { ContextButtonProps } from './ContextButton';
import { CardStyles, GridStyles } from '../style/styles';


enum ButtonContext {
  DefaultView,
  Side,
  Drawer,
}

type ContextButtonsProps = {
  contextButtons: ContextButtonProps[];
};

const ContextButtons: React.FC<ContextButtonsProps> = ({ contextButtons }) => {
    const [context, setContext] = useState(ButtonContext.DefaultView);
  
    const buttonConfigs = {
      [ButtonContext.DefaultView]: [
        { label: 'A', onPress: () => console.log('A') },
        { label: 'B', onPress: () => console.log('B') },
        { label: 'C', onPress: () => setContext(ButtonContext.Side) },
        { label: 'D', onPress: () => setContext(ButtonContext.Drawer) },
      ],
      [ButtonContext.Side]: [
        { label: 'X', onPress: () => console.log('X') },
        { label: 'Y', onPress: () => console.log('Y') },
        { label: 'Z', onPress: () => console.log('Z') },
        { label: 'Cancel', onPress: () => setContext(ButtonContext.DefaultView) },
      ],
      [ButtonContext.Drawer]: [
        { label: 'P', onPress: () => console.log('P') },
        { label: 'Q', onPress: () => console.log('Q') },
        { label: 'R', onPress: () => console.log('R') },
        { label: 'Cancel', onPress: () => setContext(ButtonContext.DefaultView) },
      ],
    };
    
    const getButtonProps = (): ContextButtonProps[] => buttonConfigs[context];
    const buttonProps = getButtonProps();
    
    
    return (
        <View style={CardStyles.container}>
          <View style={GridStyles.gridContainer}>
            {buttonProps.map((props, index) => (
              <View style={GridStyles.gridItem} key={index}>
                <ContextButton {...props} />
              </View>
            ))}
          </View>
        </View>
      );
};

export default ContextButtons;
