//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

//Create a component
const App = () => (
    //to expand the content to all the screen of the device *
    <View style={{ flex: 1 }}> 
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);

// Render component to the device
AppRegistry.registerComponent('albums', () => App);
