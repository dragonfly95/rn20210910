// In App.js in a new project

import * as React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import axios from 'axios';

function HomeScreen({navigation}) {

  const getDataUsingSimpleGetCall = async () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => alert(JSON.stringify(response.data)))
    .catch( error => alert(error.message))
    .finally(function() {})
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
          <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center', 
    backgroundColor: '#DDDD',
    padding: 10, 
    width: '100%',
    marginTop: 16
  }
});

export default App;
