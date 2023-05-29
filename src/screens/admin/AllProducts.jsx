import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { singleProduct } from '../../constant';
import { adminProfile } from '../../constant';
import Header from '../../components/Header';


const AllProducts = () => {
    return (
        <ScrollView>
            <View>
                {/* <View style={styles.hr} /> */}
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.addItemText}>All Products</Text>
                    </View>

                    {/* products */}
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                    <View style={styles.singleProductContainer}>
                        <Image style={styles.singleProductImage} source={singleProduct} />
                        <View style={styles.subHeadingText}>
                            <Text style={{ color: "#FFBB0E", fontSize: 15, fontWeight: 600 }}>Apple</Text>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>1. Kg</Text>
                            </View>
                        </View>
                        <View style={styles.textPKR}>
                            <Text style={{ fontSize: 15, fontWeight: 600, color: "#999999" }}>PKR 1000</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AllProducts;

const styles = StyleSheet.create({
    singleProductContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#FFBB0E",
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    adminProfileImage: {
        width: 60,
        height: 60,
        marginVertical: 5,
    },
    container: {
        marginLeft: 13,
        marginRight: 13,
    },
    hr: {
        height: 3,
        // marginTop: 70,
        backgroundColor: '#D9D9D9'
    },
    addItemText: {
        fontSize: 20,
        fontWeight: 600,
    },
    subHeadingText: {
        justifyContent: "center",
        alignItems: "center",
        // marginLeft: 40,
    },
    textPKR: {
        justifyContent: "center",
        alignItems: "center",
        // marginLeft: 40,
    },
})