//https://www.npmjs.com/package/react-native-video
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Video from 'react-native-video';

const VideoScreen = () => {
  return (
    <Video source={{uri: 'https://youtu.be/HMdwbq1JJT0'}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
    //    onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //    onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
  )
}

export default VideoScreen

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})