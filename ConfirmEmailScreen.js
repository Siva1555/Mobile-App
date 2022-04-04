import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputs from '../../Components/CustomInputs';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [Code, setCode] = useState('');

  
  const navigation =useNavigation('');


  const onConfirmPressed = () => {
    navigation.navigate('NewPassword')
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };

  const onResendPressed = () => {
    console.warn("ResendPressed");
  };

  return (
    <View style={styles.root} >

      <Text style={styles.heading} >Confirmation Code</Text>

      <CustomInputs
        placeholder="Enter your confimation code"
        value={Code}
        setvalue={setCode}
      />

      <CustomButton
        text="Confirm"
        onPress={onConfirmPressed}
      />

      <CustomButton
       text ="Resend code"
        onPress={onResendPressed}
        type='SECONDARY'
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

export default ConfirmEmailScreen;