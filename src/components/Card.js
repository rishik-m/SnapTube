import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () => {
    return(
        <View style= {{ marginBottom: 11 }}>
            <Image 
              source= {{
                  uri: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
              }}
              style= {{
                  width: '100%',
                  height: 230
              }}
            />
            <View style= {{
                flexDirection: "row",
                margin: 6
            }}>
            <MaterialIcons name="account-circle" size={44} color="#212121" />
                <View style= {{
                    marginLeft: 10,
                }}
                >
                    <Text style= {{
                        fontSize: 20,
                        width: Dimensions.get("screen").width - 50
                    }}
                      ellipsizeMode= 'tail'
                      numberOfLines= {2}
                    > Incredible Places to visit in vacations </Text>
                    <Text style= {{ fontSize: 18 }}> Nature is soothing </Text>
                </View>
            </View>
        </View>

    );
}

export default Card;