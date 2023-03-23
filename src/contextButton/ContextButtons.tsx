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
  
    // Define your button functions based on the context
    const getButtonProps = (): ContextButtonProps[] => {
      switch (context) {
        case ButtonContext.DefaultView:
          return [
            { label: 'A', onPress: () => console.log('A') },
            { label: 'B', onPress: () => console.log('B') },
            { label: 'C', onPress: () => console.log('C') }, //setContext(ButtonContext.Side) },
            { label: 'D', onPress: () => console.log('C') }, //setContext(ButtonContext.Drawer) },
          ];
        case ButtonContext.Side:
          return [
            { label: 'X', onPress: () => console.log('X') },
            { label: 'Y', onPress: () => console.log('Y') },
            { label: 'Z', onPress: () => console.log('Z') },
            { label: 'Cancel', onPress: () => setContext(ButtonContext.DefaultView) },
          ];
        case ButtonContext.Drawer:
          return [
            { label: 'P', onPress: () => console.log('P') },
            { label: 'Q', onPress: () => console.log('Q') },
            { label: 'R', onPress: () => console.log('R') },
            { label: 'Cancel', onPress: () => setContext(ButtonContext.DefaultView) },
          ];
      }
    };
  
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
