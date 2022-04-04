import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputs from '../../Components/CustomInputs';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [Code, setCode] = useState('');
  const [NewPassword, setNewPassword] = useState('');

  
  const navigation =useNavigation('');

  const onSubmitPressed = () => {
    navigation.navigate('SignIn')
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };

  return (
    <View style={styles.root} >

      <Text style={styles.heading} >Reset your Password</Text>

      <CustomInputs
        placeholder="Enter Your code"
        value={Code}
        setvalue={setCode}
      />

      <CustomInputs
        placeholder="Enter Your NewPassword"
        value={NewPassword}
        setvalue={setNewPassword}
      />

      <CustomButton
        text="Submit"
        onPress={onSubmitPressed}
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

export default NewPasswordScreen;