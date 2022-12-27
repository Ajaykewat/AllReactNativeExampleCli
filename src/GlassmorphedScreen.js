import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {GlassView,GlassButton,GlassInput} from '@metafic-co/react-native-glassmorphism'



const GlassmorphedScreen = () => {
    const [value, setValue] = useState('');
  return (
//     <GlassView>
//     <View>
//       <Text>I am a text over glass</Text>
//     </View>
//   </GlassView>
<View style={{flex:1,backgroundColor:"black",justifyContent:"center",alignItems:"center"}}>
{/* <GlassButton onPress={() => {console.log("You pressed on the glass.")}}>
  <Text>I am a text in Glass Button</Text>
</GlassButton> */}
 <GlassInput value={value} onChangeText={setValue} />
</View>
  )
}

export default GlassmorphedScreen

const styles = StyleSheet.create({})