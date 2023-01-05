// https://stackoverflow.com/questions/65356801/react-native-image-picker-launchcamera-in-not-working-in-android
//https://www.npmjs.com/package/react-native-file-selector
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, PermissionsAndroid } from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default class ImagePickerScreen extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      resourcePath: {},

    };

  }

   requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message:"App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const grantedcamera = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        const grantedstorage = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED && grantedstorage ===  PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera & storage permission given");
            
          var options = {
            mediaType: 'photo', //to allow only photo to select ...no video
            saveToPhotos:true,  //to store captured photo via camera to photos or else it will be stored in temp folders and will get deleted on temp clear
            includeBase64:false,
          };
  
          launchCamera (options, (res) => {
            console.log('Response = ', res);
      
            if (res.didCancel) {
              console.log('User cancelled image picker');
            } else if (res.error) {
              console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
              console.log('User tapped custom button: ', res.customButton);
              alert(res.customButton);
            } else {
             // let source = res;
              // var resourcePath1 = source.assets[0].uri;
              const source = { uri: res.uri };
              console.log('response', JSON.stringify(res));
      
              //  setImageSource(source.uri);
             
              
            }
          });
  
  
        } else {
          console.log("Camera permission denied");
        }
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  selectFile = async () => {

    var options = {

      title: 'Select Image',

      customButtons: [

        { 

          name: 'customOptionKey', 

          title: 'Choose file from Custom Option' 

        },

      ],

      storageOptions: {

        skipBackup: true,

        path: 'images',

      },

    };

   

 

    // await launchImageLibrary(options, res => {

    //   console.log('Response = ', res);

    //   if (res.didCancel) {

    //     console.log('User cancelled image picker');

    //   } else if (res.error) {

    //     console.log('ImagePicker Error: ', res.error);

    //   } else if (res.customButton) {

    //     console.log('User tImagePickerScreened custom button: ', res.customButton);

    //     alert(res.customButton);

    //   } else {

    //     let source = res;

    //     this.setState({

    //       resourcePath: source,

    //     });

    //   }

    // });

  };

 

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.container}>

          <Image

            source={{

              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,

            }}

            style={{ width: 100, height: 100 }}

          />

          <Image

            source={{ uri: this.state.resourcePath.uri }}

            style={{ width: 200, height: 200 }}

          />

          <Text style={{ alignItems: 'center' }}>

            {this.state.resourcePath.uri}

          </Text>

          <TouchableOpacity onPress={this.requestCameraPermission} style={styles.button}>

              <Text style={styles.buttonText}>Select File</Text>

          </TouchableOpacity>       

        </View>

      </View>

    );

  }

}

 

const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 30,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#fff'

  },

  button: {

    width: 250,

    height: 60,

    backgroundColor: '#3740ff',

    alignItems: 'center',

    justifyContent: 'center',

    borderRadius: 4,

    marginBottom:12

  },

  buttonText: {

    textAlign: 'center',

    fontSize: 15,

    color: '#fff'

  }

});