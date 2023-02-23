import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty, size } from 'lodash'
import { Image, Input, Button, Icon } from '@rneui/base'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { validateEmail } from '../../../../kernel/validations'
// import AsyncStorage from '@react-native-async-storage/async-storage'

import Loading from '../../../../kernel/components/Loading'

export default function Login() {
    const payLoad = {
        email: '',
        password: ''
    }
    // const auth = getAuth()
    const [show, setShow] = useState(false)
    const [error, setError] = useState(payLoad)
    const [data, setData] = useState(payLoad)
    const [showPassword, setShowPassword] = useState(true)
    const changePayLoad = (e, type) => {
        setData({ ...data, [type]: e.nativeEvent.text })
    }
    const login = () => {
        if (!(isEmpty(data.email) || isEmpty(data.password))) {
            console.log('Login 29 -> data', data);
            setShow(true)
            setError(payLoad)
            console.log('Listo para el registro');
            
            setShow(false)
            // signInWithEmailAndPassword(auth, email, password)
            //     .then(async (userCredential) => {
            //         const user = userCredential.user;
            //         try {
            //             await AsyncStorage.setItem('@session', JSON.stringify(user))
            //         } catch (e) {
            //             console.error("Error -> login Storage", e);
            //         }
            //         console.log("Login", user);
            //         setShow(false)
            //         navigation.navigate("userGuestStack")
            //     })
            //     .catch((error) => {
            //         setError({ email: '', password: 'Usuario o contraseña incorrectos' })
            //         setShow(false)
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //     });
        } else {
            setShow(false)
            setError({
                email: 'Campo obligatorio',
                password: 'Campo obligatorio',
                repeatPassword: 'Campo obligatorio'
            })
        }
    };
    return (
        <KeyboardAwareScrollView style={styles.screen}>
            <Image
                source={require('../../../../assets/airbnb.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewForm}>
                <View style={styles.container}>
                    <Input
                        placeholder='Correo Electrónico'
                        keyboardType='email-address'
                        rightIcon={
                            <Icon type='material-community' name='email' size={22} />
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'email')}
                        errorMessage={error.email}
                        autoCapitalize='none'
                    />
                    <Input
                        placeholder='Contraseña'
                        containerStyle={styles.input}
                        rightIcon={
                            <Icon
                                type='material-community'
                                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                onPress={() => setShowPassword(!showPassword)}
                                size={22}
                            />
                        }
                        secureTextEntry={showPassword}
                        onChange={(e) => changePayLoad(e, 'password')}
                        errorMessage={error.password}
                    />
                    <Button
                        title='Iniciar sesión'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={login}
                    />
                </View>
            </View>
            <Loading show={show} text='Registrando' />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 159,
        marginTop: 135
    },
    viewForm: {
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    input: {
        width: '100%',
        marginVertical: 10
    },
    btnContainer: {
        marginBottom: 20,
        width: '95%'
    },
    btn: {
        backgroundColor: '#e72c5a'
    },
    screen:{
        backgroundColor:'white'
    },
})