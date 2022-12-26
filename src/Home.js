import { StyleSheet, Text, View,Dimensions, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
import { Dirs } from 'react-native-file-access';
import { CachedImage, CacheManager } from '@georstat/react-native-image-cache';
import { images } from './help';


const height=Dimensions.get('window').height
const width=Dimensions.get('window').width


CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000,
};

const Home = ({navigation}) => {
  return (
<FlatList
data={images}
numColumns={2}
keyExtractor={(item,index)=>item.id}
renderItem={({item,index}) => (
  <TouchableOpacity  onPress={()=> navigation.navigate("Slider",{
    index:index
  })}>
  <CachedImage
          resizeMode="cover"
          source={item.url}
          style={styles.customImage}
          thumbnailSource='https://thumbs.dreamstime.com/b/environment-earth-…-hand-holding-tree-nature-field-gra-130247647.jpg'
        />
        </TouchableOpacity>
)}
/>

    

  )
}

export default Home

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  customImageContainer: {
    justifyContent: "space-between",
    // paddingHorizontal: 24,
  },
  customImage: {
    height: 180,
    overflow: 'hidden',
    width: 180,
    margin:10
  },
});