import React, { useState } from 'react';
import { Button, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dirs } from 'react-native-file-access';
import { CachedImage, CacheManager } from '@georstat/react-native-image-cache';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import {
  ImageGallery,
  ImageObject,
} from '@georstat/react-native-image-gallery';
import { images } from './help';
import ImageZoom from 'react-native-image-pan-zoom';


CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000,
};

const ImageSlider = ({navigation,route}) => {

  const[imagePosition,setImagePosition]=useState(-1)
  if(imagePosition == -1){
    setImagePosition(route.params.index)
  }



  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <Text>hello</Text>
        {/* image ImageSlider */}
        <FlatList
        style={{flex:1}}
        initialScrollIndex={imagePosition}
        data={images}
        horizontal
        keyExtractor={(item,index)=>item.id}
        renderItem={({item,index})=>(
                <ImageZoom
     cropWidth={width}
    cropHeight={height}
    imageWidth={300}
    imageHeight={300}>
          <CachedImage
          resizeMode="cover"
          source={item.url}
          style={styles.customImage}
          thumbnailSource='https://thumbs.dreamstime.com/b/environment-earth-…-hand-holding-tree-nature-field-gra-130247647.jpg'
        />
          </ImageZoom>
        )}
        />
       
      </View>
    </SafeAreaView>
  );
};

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
    borderColor: 'green',
    // backgroundColor:"blue",
    // borderRadius: 250,
    // borderWidth: 3,
    height: 200,
    overflow: 'hidden',
    width: 300,
    margin:10
  },
});

export default ImageSlider;
