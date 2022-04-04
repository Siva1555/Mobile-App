import React from 'react'
import { Text, View } from 'react-native'
import CustomButton from '../../CustomButton'

const SocialSignInButton = () => {

    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
      };
    
    
      const onSignInFaceBook = () => {
        console.warn("onSignInFaceBook");
      };





    return (
        <>
            <CustomButton
                text="signIn With Google"
                onPress={onSignInGoogle}
                bgcolor="#FAE9EA"
                fgcolor="#DD4D44"
            />


            <CustomButton
                text="signIn With FaceBook"
                onPress={onSignInFaceBook}
                bgcolor="#E7EAF4"
                fgcolor="#4765A9"
            />
        </>
    )
}

export default SocialSignInButton
