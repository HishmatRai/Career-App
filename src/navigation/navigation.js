import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../screens/login'
import Search from './../screens/search'
import Inbox from './../screens/inbox'
import Category from './../screens/category'
import CareerSearch from './../screens/career_search'
import Notification from './../screens/notification'
import Mentors from './../screens/mentors'
import Settings from './../screens/settings'
import Profile from './../screens/profile'
import Earnings from './../screens/earnings'
import ChatWithMentors from './../screens/chat_with_mentors'
import PaymentMethods1 from './../screens//payment_methods_1'
import PaymentMethods2 from './../screens//payment_methods_2'
const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="CareerSearch" component={CareerSearch} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Mentors" component={Mentors} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Earnings" component={Earnings} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="ChatWithMentors" component={ChatWithMentors} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="PaymentMethods1" component={PaymentMethods1} options={{ headerShown: false }} /> */}
                <Stack.Screen name="PaymentMethods2" component={PaymentMethods2} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;