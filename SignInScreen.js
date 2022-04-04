import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import Logo from '../../../assests/wings.png'
import CustomInputs from '../../Components/CustomInputs';
import SocialSignInButton from '../../Components/SocialSignInButtoon/SocialSignInButton';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const { height } = useWindowDimensions();
  const navigation =useNavigation('');

  const onSignInPressed = () => {
    navigation.navigate('HomeScreen')
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  };



  return (
    <View style={styles.root} >

      <Text style={styles.heading} >INNODHA TECHNOLOGY PRIVATE LTD.,</Text>

      <Image
        source={Logo}
        style={[styles.image, { height: height * 1 }]}
        resizeMode="contain"
      />

      <CustomInputs
        placeholder="Username"
        value={username}
        setvalue={setusername}
      />

      <CustomInputs placeholder="Password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="signIn"
        onPress={onSignInPressed}
      />
      <CustomButton
        text="ForgotPassword"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <SocialSignInButton />

      <CustomButton
        text="Dont't have an account? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
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
    color: 'black',
  },


  image: {
    maxWidth: 100,
    maxHeight: 100,
    marginBottom: 25,
    marginTop: 20,
  }
})

export default SignInScreen;