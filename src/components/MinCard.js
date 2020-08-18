import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

const MiniCard = () => {
    return (
        <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0 }}>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
                }}
                style={{
                    width: '45%',
                    height: 100
                }}
            />
            <View style={{ padding: 5 }}>
                <Text style={{
                    fontSize: 18,
                    width: Dimensions.get('screen').width / 2
                }}
                    ellipsizeMode='tail'
                    numberOfLines={3}
                > This is an incredible place </Text>
                <Text style={{ fontSize: 12 }}> Carryminati </Text>
            </View>
        </View>
    );
}

export default MiniCard;
