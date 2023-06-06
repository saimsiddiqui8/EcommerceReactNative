import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemeButton from '../../reusable/ThemeButton'
import { useNavigation } from "@react-navigation/native";
import { adminProfile } from '../../constant'

const AddItem = () => {
    const navigation = useNavigation();
    const handleAddItem = () => {
        navigation.navigate("AllProducts");
        console.log("H");
    }
    return (
        <>
            <View>
             
                <View style={styles.container}>
                    {/* <View style={{ alignItems: 'center' }}>
                        <Text style={styles.addItemText}>Add New Item</Text>
                    </View> */}
                    <View style={styles.hr} />
                    <View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input} fontSize={13} numberOfLines={4} placeholder="Image" placeholderTextColor="#000000" />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input} fontSize={13} placeholder="Item Name" placeholderTextColor="#000000" />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input} fontSize={13} placeholder="Select Category" placeholderTextColor="#000000" />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput style={styles.input} textAlignVertical="top" multiline={true} fontSize={13} numberOfLines={4} placeholder="Describe this item" placeholderTextColor="#000000" />
                        </View>
                        <View style={styles.cont}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Name:</Text></View>
                            <View>
                                <TextInput style={styles.input} fontSize={13} placeholder="Pcs / Kg / dozen" placeholderTextColor="#000000" />
                            </View>
                        </View>
                        <View style={styles.cont}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 15, marginRight: 15, marginTop: 5 }}>Unit Price:</Text></View>
                            <View>
                                <TextInput style={styles.input} fontSize={13} placeholder="0000 PKR" placeholderTextColor="#000000" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.addProductBtn}>
                <ThemeButton text="Add Product" click={handleAddItem}/>
            </View>
        </>
    )
}

export default AddItem

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    containers: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        backgroundColor: "#ffffff"
    },
    hr: {
        height: 3,
        marginTop: 60,
        marginBottom: 10,
        backgroundColor: '#D9D9D9'
    },
    addItemText: {
        fontSize: 20,
        fontWeight: 600,
    },
    input: {
        width: '100%',
        marginTop: 10,
        backgroundColor: '#E5E8F2',
        borderRadius: 5,
        color: '#000000',
        paddingHorizontal: 16,
    },
    cont: {
        flexDirection: 'row',
    },
    addProductBtn: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 15,
    }
})