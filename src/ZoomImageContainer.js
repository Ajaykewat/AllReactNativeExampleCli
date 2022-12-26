import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
const height=Dimensions.get('window').height
const width=Dimensions.get('window').width
const ZoomImageContainer = ({Children,style}) => {
  return (
    <ImageZoom
    style={style}
     cropWidth={width}
    cropHeight={height}
    imageWidth={200}
    imageHeight={200}>
{Children}
</ImageZoom>
  )
}

export default ZoomImageContainer

const styles = StyleSheet.create({})