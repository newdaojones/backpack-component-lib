// AssetDrawer.tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { AssetDrawer as AssetDrawerModel, CommonDrawerData, ListItem } from './DrawerModels';
import { DrawerStyles } from '../style/styles';

export type AssetDrawerProps = {
  data: CommonDrawerData;
  onDrawerChange: (drawerId: string) => void;
}

const AssetDrawer: React.FC<AssetDrawerProps> = ({ data, onDrawerChange }) => {
  const {
    title,
    list,
  } = data;

  const renderItem = ({ item }: { item: ListItem }) => (
    <Text>{item.name}</Text>
  );
  

  return (
    <View style={DrawerStyles.listContainer}>
      <Text>{title}</Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AssetDrawer;
