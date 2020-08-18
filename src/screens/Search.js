import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MiniCard from '../components/MinCard';

const SearchScreen = () => {
    const [value, setValue] = useState("")
    return (
        <View style={{
            flex: 1,
            marginTop: 33
        }}>
            <View style={{
                flexDirection: 'row',
                padding: 6,
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: 'white'
            }}>
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />
                <TextInput
                    value={value}
                    onChangeText={text => setValue(text)}
                    style={{ width: '70%', backgroundColor: '#e6e6e6' }}
                />
                <MaterialCommunityIcons name="send" size={24} color="black" />
            </View>
            <ScrollView>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </ScrollView>
        </View>
    );
}

export default SearchScreen;