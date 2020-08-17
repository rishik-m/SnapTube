import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={{
            marginTop: 33,
            height: 48,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 4
        }}>
            <View style={{
                flexDirection: 'row',
                margin: 5
            }}>
                <MaterialCommunityIcons style={{
                    marginLeft: 15
                }} name="youtube-creator-studio" size={40} color="black" />
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: '#212121'
                }}> SnapTube </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 150,
                margin: 5
            }}>
                <FontAwesome name="video-camera" size={35} color="#212121" />
                <FontAwesome name="search" size={35} color="#212121" />
                <MaterialIcons name="account-circle" size={35} color="#212121" />
            </View>
        </View>
    );
}

