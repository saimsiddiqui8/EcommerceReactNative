import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/Header';
import { singleProduct } from '../../constant';

const AllProducts = () => {
    const navigation = useNavigation();
    const openProductToEdit = () => { 
        // navigation.navigate('SingleProductEdit');
    }

    const products = [
        {
            id: 1,
            name: 'Apple',
            weight: '1 Kg',
            price: 'PKR 1000',
            image: singleProduct,
        },
        {
            id: 2,
            name: 'Mango',
            weight: '4 Kg',
            price: 'PKR 1870',
            image: singleProduct,
        },
        {
            id: 3,
            name: 'Banana',
            weight: '0.5 Kg',
            price: 'PKR 100',
            image: singleProduct,
        },
        {
            id: 4,
            name: 'Pineapple',
            weight: '4 Kg',
            price: 'PKR 4870',
            image: singleProduct,
        },
        {
            id: 5,
            name: 'Grapes',
            weight: '1 Kg',
            price: 'PKR 320',
            image: singleProduct,
        },
        {
            id: 6,
            name: 'Mango',
            weight: '40 Kg',
            price: 'PKR 15000',
            image: singleProduct,
        },
    ];

    return (
        <>
            <Header
                title="All Products"
                // icon={leftArrow}
                navigation={navigation} />
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        {products.map((product) => (
                            <TouchableOpacity key={product.id} onPress={openProductToEdit}>
                                <View style={styles.singleProductContainer}>
                                    <Image style={styles.singleProductImage} source={product.image} />
                                    <View style={styles.subHeadingText}>
                                        <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>{product.name}</Text>
                                        <View>
                                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>{product.weight}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.textPKR}>
                                        <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>{product.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default AllProducts;

const styles = StyleSheet.create({
    singleProductContainer: {
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#FFBB0E",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    container: {
        marginLeft: 13,
        marginRight: 13,
    },
    singleProductImage: {
        width: 60,
        height: 60,
        marginVertical: 5,
    },
    subHeadingText: {
        justifyContent: "center",
        alignItems: "center",
    },
    textPKR: {
        justifyContent: "center",
        alignItems: "center",
    },
});
