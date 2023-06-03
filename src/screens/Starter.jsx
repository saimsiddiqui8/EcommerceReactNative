import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { logo } from '../constant';
import { useNavigation } from '@react-navigation/native';
import ThemeButton from '../reusable/ThemeButton';
import ThemeButtonLight from '../reusable/ThemeButtonLight';


const windowHeight = Dimensions.get('window').height;

const Starter = () => {

    const navigation = useNavigation();
    const navigateToLoginScreen = () => {
        navigation.navigate('Login');
    }

    const navigateToSignUpScreen = () => {
        navigation.navigate('Signup');
    }
    return (
        <View>
            <View>
                <View style={[styles.containerOne, { marginTop: windowHeight * 0.35 }]}>
                    <Image
                        style={styles.tinyLogo}
                        source={logo}
                    />
                </View>
            </View>
            <View style={styles.containerTwo}>
                <ThemeButton text="Log In" click={navigateToLoginScreen} />
            </View>
            <View style={styles.containerThree}>
                <ThemeButtonLight text="Register" click={navigateToSignUpScreen} />
            </View>
        </View>
    )
}

export default Starter;

const styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTwo: {
        marginTop: 120,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerThree: {
        marginTop: 80,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        alignSelf: 'center',
    }
})