import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Carousel } from "rn-image-carousel";

const imagesData = [
    {data: { uri: "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" }, id: "img-1"},
    {data: { uri: "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" }, id: "img-2"},
    {data: { uri: "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" }, id: "img-3"},
];

const ImageCarousalSlider = () => {
    

    const onImagePress = (id: string | number) => {
        console.info(`image pressed: ${id}`);
    }


  return (
   
<View style={styles.main}>
            <Carousel
                style={styles.carousel}
                autoPlay={true}
                enableStepDots={true}
                resizeMode="contain"
                activeDotColor="white"
                inActiveDotColor="black"
                imagesData={imagesData}
                onImagePress={onImagePress}/>
        </View>
  )
}

export default ImageCarousalSlider

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flex:1,
        backgroundColor: "#000",
        padding: 8
    },
    carousel: {
        width: "100%",
        height: "100%",
    }
});