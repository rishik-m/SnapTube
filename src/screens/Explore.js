import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const LiCard = ({ name }) => {
    return (
        <View style={{
            backgroundColor: 'orange',
            width: 180,
            height: 50,
            borderRadius: 4,
            marginTop: 10
        }}>
            <Text style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                marginTop: 5
            }}> {name} </Text>
        </View>
    );
}


const Explore = () => {
    const cardData = useSelector(state => {
        return state
    })
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}>
                    <LiCard name="Trending" />
                    <LiCard name="Gaming" />
                    <LiCard name="Films" />
                    <LiCard name="Learning" />
                    <LiCard name="Music" />
                    <LiCard name="News" />
                    <LiCard name="Fashion" />
                    <LiCard name="Live" />
                </View>
                <Text style={{
                    margin: 8,
                    borderBottomWidth: 1,
                    fontSize: 22
                }}>
                    Trending videos
                </Text>
                <FlatList
                    data={cardData}
                    renderItem={({ item }) => {
                        return <Card
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={(item) => item.id.videoId}
                />
            </ScrollView>
        </View>
    );
}

export default Explore;
