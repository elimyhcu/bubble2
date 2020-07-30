// In App.js in a new project
import * as React from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput } from 'react-native';
import ReviewForm from'./screens/reviewForm';
import config from './src/config';
import * as firebase from 'firebase';

class App extends React.Component {\
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    }
//initialize firebase
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig);}
  }
  constructor()
  {
    super();
    this.state={
      show:true
    }
  };
  //need to find a key to store the data - this is just for tutorial
  render(){
    return(
    <View style={{ flex: 1, marginTop: 200}}>
    <Text style={{ fontSize: 80 }}>Home screen </Text>
    <Modal
    transparent={true}
    visible={this.state.show}
    animationType='fade'
    statusBarTranslucent={true}
    >
    <View style={{backgroundColor:"#000000aa", flex: 1}}>
      <View style={{backgroundColor:"#ffffff", margin: 20, padding: 30, borderRadius: 10, flex: 1}}>
    <Text style={{ fontSize: 65 }}>Survey</Text>
            <ReviewForm />
      </View>
    </View>
  </Modal>
</View>
  )
}
}
export default App;
