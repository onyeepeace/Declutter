import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigationItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';

export default Sidebar = props => {
    <ScrollView>
        <ImageBackground source={require('../assets/marble.jpg')} style={{width: undefined, padding: 16, paddingTop: 48}}>
            <Image source={require('../assets/favicon.png')} style={styles.profile} />
        </ImageBackground>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff'
    }
})