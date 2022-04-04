import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


const CustomInputs = ({ value, setvalue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setvalue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 300,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        height:50,
    },

});

export default CustomInputs;