import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
import { cartfill, homefill } from '../../constant';
import AllProducts from './AllProducts';
import AddItem from './AddItem';

const Admin = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'black',
                }}>
                <Tab.Screen
                    name="Home"
                    component={AllProducts}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={homefill}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />

                <Tab.Screen
                    name="Cart"
                    component={AddItem}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={cartfill}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Admin;
