import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ListRenderItem,
  NativeModules,
} from 'react-native';
import ARItem from './src/components/ARItem';
import data from './src/data';
import {ItemType} from './src/@types';

const {ARViewerModule} = NativeModules;

function App(): JSX.Element {
  const onTouchAssetHandler = (item: ItemType) => {
    ARViewerModule.displayInAR(item.aRUrl);
  };

  const renderItem: ListRenderItem<ItemType> = ({item}) => {
    return <ARItem item={item} onPress={() => onTouchAssetHandler(item)} />;
  };

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
}

export default App;
