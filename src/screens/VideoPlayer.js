import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player';


const VideoPlay = ({ route }) => {
    const { videoId, title } = route.params
    return (
        <View style={{ flex: 1, marginTop: 33 }}>
            <View style={{
                width: '100%',
                height: 200
            }}>
                <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: {
                            uri: `https://www.youtube.com/embed/${videoId}`
                        },
                    }}
                    inFullscreen={true}
                />

            </View>
            <Text style={{
                fontSize: 20,
                width: Dimensions.get("screen").width - 50,
                margin: 9
            }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View
                style={{ borderBottomWidth: 1 }}
            />
        </View>
    );
}

export default VideoPlay;