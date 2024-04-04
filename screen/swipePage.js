import React, { useState, useRef, useEffect } from 'react';
import LinearGradient from "react-native-linear-gradient";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Image,
    Animated, TouchableWithoutFeedback, Dimensions, PanResponder, TextInput, SafeAreaView } from 'react-native';
import TinderCard from 'react-tinder-card';
const SwipePage = () =>{
 const Images = [
    // require('../assets/img/steak.jpg'),
    // require('../assets/img/dupbap.jpg'),
    // require('../assets/img/steak.jpg'),
 ];
 const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  };
  
  const onCardLeftScreen =  (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  };

  const [foodMatch, setFoodMatch]=useState([
    { name: '스테이크',  img: require('../img/steak.jpg')},
    { name: '덮밥',  img: require('../img/dupbap.jpg')},
    // { name: '스테이크',  img: require('img/steak.jpg')},
    // { name: '덮밥',  img:  require('img/dupbap.jpg')},
  ]) 

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>matbap</Text>
                </View>
                {/* <Image source={require('../assets/img/steak.jpg')} style = {{width: '100%', height: '100%'}}></Image> */}
                <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}
                    style={{width: '100%', height: '100%'}}
                    >
                    <View style={styles.swipeContainer}>
                        <Image source={require('../img/steak.jpg')} style = {{width: '100%', height: '100%', borderRadius: 20}}/>
                        <LinearGradient
                        colors={['transparent', 'black']}
                        style={styles.gradient}
                        />
                    </View>
                </TinderCard>
                {/* <View style={styles.foodNameContainer}>
                    <Text style={styles.foodName}>
                        스테이크
                    </Text>
                    <Text style={styles.foodDetail}>
                        먹을까...
                    </Text>
                </View> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: "purple",
        width: "100%",
        height: "100%",
        zIndex: 1,
        display: 'flex',
        // justifyContent:'center',
        alignItems:'center'
    },
    title:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        height: 80,
        backgroundColor: 'white'
    },
    titleText:{
        fontSize: 30,
        color: 'black',
    },
    swipeArea:{
        width: '100%',
        height: '100%',
        // backgroundColor: 'pink'
    },
    gradient:{
        // opacity: 0.3,
        zIndex:2,
        height: '100%',
        // opacity: 1.5,
        ...StyleSheet.absoluteFillObject,

    },
    swipeContainer:{
        // flex: 1,
        width: 420,
        height: '100%',
        // backgroundColor: 'orange',
        borderRadius: 20,
        // padding: 20
    },
    foodNameContainer:{
        position: "absolute",
        left: 35,
        bottom: 20,
        // backgroundColor: 'blue',
        zIndex: 3
    },
    foodName:{
        color: "white",
        fontSize: 40,
        position: "relative",
        // bottom: 300,
        // marginBottom: 100   
    },
    foodDetail:{
        marginTop: 40,
        fontSize: 15,        
        position: "relative",
        color:"white",
        marginBottom: 170,
        marginLeft: 25,
    }
})
export default SwipePage;