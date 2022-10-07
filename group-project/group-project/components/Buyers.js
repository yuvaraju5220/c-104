import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
const bgImage = require('../assets/background1.png');
export default class ArtistsScreen extends React.Component {
  render() {
    return (
      
        <View>
         <FlatList
        
         >
          //1
          <Image source={require('../assets/1.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //2
          <Image source={require('../assets/2.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //3
          <Image source={require('../assets/3.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //4
          <Image source={require('../assets/4.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //5
          <Image source={require('../assets/5.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //6
          <Image source={require('../assets/6.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //7
          <Image source={require('../assets/7.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //8
          <Image source={require('../assets/8.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //9
          <Image source={require('../assets/9.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          //10
          <Image source={require('../assets/10.png')} style={styles.image} />
          <Text style={styles.text}>Name: Rahila</Text>
          <Text style={styles.text}>Age: 42</Text>
          
        </FlatList>
        </View>
       
      
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
  },
  text: {
    fontWeight: 'Bold',
    color: '#ffffff',
  },
});
