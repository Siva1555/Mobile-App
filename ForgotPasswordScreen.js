import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputs from '../../Components/CustomInputs';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [Username, setUsername] = useState('');

  const navigation =useNavigation('');

  const onsendPressed = () => {
    navigation.navigate('ConfirmEmail')
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };

  return (
    <View style={styles.root} >

      <Text style={styles.heading} >Reset your Password</Text>

      <CustomInputs
        placeholder="Username"
        value={Username}
        setvalue={setUsername}
      />

      <CustomButton
        text="Send"
        onPress={onsendPressed}
      />

      <CustomButton
        text=" < Back to signIn"
        onPress={onSignInPressed}
        type='TERTIARY'
      />

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,

  },
  heading: {
    fontWeight: 'bold',
    color: '#332FD0',
    fontSize: 24,

  },

  text: {
    marginVertical: 10,
    color: 'gray'
  },
  link: {
    color: "#F76E11"
  }
})

export default ForgotPasswordScreen;