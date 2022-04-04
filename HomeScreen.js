import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assests/pin.png'


const HomeScreen = () => {

    const { height } = useWindowDimensions();
    return (
        <View style={styles.container} >

            <Text style={styles.text} >
                Home Screen
            </Text>

            <Image source={Logo}
                style={[styles.image, { height: height * 3 }]}
                resizeMode="contain" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        paddingTop:50,
        
    },
    image: {
        maxWidth: 100,
        maxHeight: 100,
        marginBottom: 25,
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        alignItems: 'center',
    }
})

export default HomeScreen
