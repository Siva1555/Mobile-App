import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInputs from '../../Components/CustomInputs';
import SocialSignInButton from '../../Components/SocialSignInButtoon/SocialSignInButton';
import CustomButton from '../../CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passwordRepeat, setpasswordRepeat] = useState('');

  const navigation =useNavigation('');

  const onRegisterPressed = () => {
    navigation.navigate('SignIn')
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  };

  const onTermsofusePressed = () => {
    console.warn("onTermsofusePressed");
  };

  const onPrivacypolicyPressed = () => {
    console.warn("onPrivacypolicyPressed");
  };

  return (
    <View style={styles.root} >

      <Text style={styles.heading} >Create an account</Text>



      <CustomInputs
        placeholder="Username"
        value={username}
        setvalue={setusername}
      />

      <CustomInputs
        placeholder="Email"
        value={email}
        setvalue={setemail}
      />

      <CustomInputs placeholder="Password"
        value={password}
        setvalue={setpassword}
        secureTextEntry={true}
      />

      <CustomInputs placeholder="PasswordRepeat"
        value={passwordRepeat}
        setvalue={setpasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton
        text="Register"
        onPress={onRegisterPressed}
      />



      <Text style={styles.text} >By registering, you confirm that you accept our {' '}
        <Text style={styles.link} onPress={onTermsofusePressed} >Terms of use </Text> and {' '}
        <Text style={styles.link} onPress={onPrivacypolicyPressed} >Privacy Policy</Text>
      </Text>

      <SocialSignInButton />



      <CustomButton
        text="Have an account? SignIn"
        onPress={onSignInPressed}
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

export default SignUpScreen;