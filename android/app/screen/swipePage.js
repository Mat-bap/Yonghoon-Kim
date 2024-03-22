// import React, { useState, useRef, useEffect } from 'react';
// import LinearGradient from "react-native-linear-gradient";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image,
//     Animated, TouchableWithoutFeedback, Dimensions, PanResponder, TextInput, SafeAreaView } from 'react-native';
// import TinderCard from 'react-tinder-card';
// const SwipePage = () =>{
//  const Images = [
//     require('../assets/img/steak.jpg'),
//     require('../assets/img/dupbap.jpg'),
//     require('../assets/img/steak.jpg'),
//  ];
//  const onSwipe = (direction) => {
//     console.log('You swiped: ' + direction)
//   };
  
//   const onCardLeftScreen =  (myIdentifier) => {
//     console.log(myIdentifier + ' left the screen')
//   };

//   const [foodMatch, setFoodMatch]=useState([
//     { name: '스테이크',  img: require('')},
//     { name: '덮밥',  img: require('assets/img/dupbap.jpg')},
//     { name: '스테이크',  img: require('assets/img/steak.jpg')},
//     { name: '덮밥',  img:  require('assets/img/dupbap.jpg')},
//   ]) 

//     return(
//         <SafeAreaView>
//             <View style={styles.container}>
//                 {/* <Image source={require('../assets/img/steak.jpg')} style = {{width: '100%', height: '100%'}}></Image> */}
//                 {/* <LinearGradient
//                         colors={['transparent', 'black']}
//                         style={styles.gradient}
//                 /> */}
//                 <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
//                     <View style={styles.swipeContainer}>
//                         <Image source={require('../assets/img/steak.jpg')} style = {{width: '100%', height: '100%', borderRadius: 20}}/>
//                     </View>
//                 </TinderCard>
//                 {/* <View style={styles.foodNameContainer}>
//                     <Text style={styles.foodName}>
//                         스테이크
//                     </Text>
//                     <Text style={styles.foodDetail}>
//                         먹을까...
//                     </Text>
//                 </View> */}
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor: "pink",
//         width: "100%",
//         height: "100%",
//         zIndex: 1,
//         display: 'flex',
//         justifyContent:'center',
//         alignItems:'center'
//     },

//     gradient:{
//         // opacity: 0.3,
//         zIndex:2,
//         height: '100%',
//         // opacity: 0.9,
//         ...StyleSheet.absoluteFillObject,

//     },
//     swipeContainer:{
//         width: 350,
//         height: 600,
//         backgroundColor: 'orange',
//         borderRadius: 20,
//         // padding: 20
//     },
//     foodNameContainer:{
//         position: "absolute",
//         left: 35,
//         bottom: 20,
//         // backgroundColor: 'blue',
//         zIndex: 3
//     },
//     foodName:{
//         color: "white",
//         fontSize: 40,
//         position: "relative",
//         // bottom: 300,
//         // marginBottom: 100   
//     },
//     foodDetail:{
//         marginTop: 40,
//         fontSize: 15,        
//         position: "relative",
//         color:"white",
//         marginBottom: 170,
//         marginLeft: 25,
//     }
// })
// export default SwipePage;