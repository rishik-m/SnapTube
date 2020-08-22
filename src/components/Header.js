import React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const { currentTheme } = useSelector(state => {
        return state.modeDark
    })
    const myColor = colors.iconColor
    return (
        <View style={{
            marginTop: 33,
            height: 48,
            backgroundColor: colors.headerColor,
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
                }} name="youtube-creator-studio" size={40} color={myColor} />
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: { myColor }
                }}> SnapTube </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 150,
                margin: 5
            }}>
                <FontAwesome name="video-camera" size={35} color={myColor} />
                <FontAwesome name="search" size={35} color={myColor} onPress={() => navigation.navigate("Search")} />
                <MaterialIcons name="account-circle" size={35} color={myColor}
                    onPress={() => dispatch({ type: 'switch_theme', payload: !currentTheme })}
                />
            </View>
        </View>
    );
}

