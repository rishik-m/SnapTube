import React, { useState } from 'react';
import { View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MiniCard from '../components/MinCard';
import { useSelector, useDispatch } from 'react-redux';


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDTKlsqNopd7PbJVqMEp-OELL3APAeiytc

const SearchScreen = ({ navigation: { goBack } }) => {
    const [value, setValue] = useState("")
    // const [miniCardData, setMiniCard] = useState([])
    const dispatch = useDispatch()

    const miniCardData = useSelector(state => {
        return state
    })

    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDTKlsqNopd7PbJVqMEp-OELL3APAeiytc`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                dispatch({ type: "add", payload: data.items })
                // setMiniCard(data.items)
            })
    }
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
                <MaterialIcons name="keyboard-backspace" size={24} color="black" onPress={() => goBack()} />
                <TextInput
                    value={value}
                    onChangeText={text => setValue(text)}
                    style={{ width: '70%', backgroundColor: '#e6e6e6' }}
                />
                <MaterialCommunityIcons name="send" size={24} color="black" onPress={() => fetchData()} />
            </View>
            {loading ? <ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={(item) => item.id.videoId}
            />
        </View>
    );
}

export default SearchScreen;