import *as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, SafeAreaView, ImageBackground } from 'react-native';




export default class InitialScreen extends React.Component{
  render(){
    return(
        <ImageBackground
            source={require("../assets/bg.png")}
            style = {styles.backgroundImage}
        >   
            <View style = {styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleText}>Lumin App</Text>
                </View>
                <View style = {styles.initialContainer}>
                    <TouchableOpacity style = {styles.buttonInitial}> COMEÇAR
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
  }
}