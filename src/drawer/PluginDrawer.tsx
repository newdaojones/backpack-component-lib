import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { PluginDrawer as PluginDrawerModel, ListItem } from './DrawerModels';
import { DrawerStyles } from '../style/styles';

type PluginDrawerProps = {
  data: PluginDrawerModel;
  onDrawerChange: (drawerId: string) => void;
}

const PluginDrawer: React.FC<PluginDrawerProps> = ({ data, onDrawerChange }) => {
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

export default PluginDrawer;
