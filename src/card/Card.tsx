import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useCardAnimation } from "../utils/animations";
import { CardStyles } from "../style/styles";

const Card = ({ children }) => {
  const [currentSide, setCurrentSide] = useState(0);
  const animation = useCardAnimation();

  const handleSideChange = (newSide) => {
    setCurrentSide(newSide);
    animation.start();
  };

  return (
    <View style={CardStyles.container}>
      <TouchableOpacity onPress={() => handleSideChange((currentSide + 1) % children.length)}>
        <View style={CardStyles.cardBasic}>
          {children[currentSide]}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
