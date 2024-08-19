import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen'; // Import the AuthScreen

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Auth"> {/* Set Auth as the initial route */}
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
}










// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoadingScreen from './screens/LoadingScreen';
// import AuthScreen from '../screens/AuthScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import UnitInfoScreen from '../screens/UnitInfoScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import EditUnitScreen from '../screens/EditUnitScreen';
// import NotificationScreen from '../screens/NotificationScreen';
// import TaskCardListScreen from '../screens/TaskCardListScreen';
// import SortFilterScreen from '../screens/SortFilterScreen';

// const Stack = createNativeStackNavigator();

// export function AppNavigator() {
//   return (
    // <Stack.Navigator initialRouteName="Loading">
      {/* <Stack.Screen name="Loading" component={LoadingScreen} /> */}
      {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="UnitInfo" component={UnitInfoScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="EditUnit" component={EditUnitScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="TaskCardList" component={TaskCardListScreen} />
      <Stack.Screen name="SortFilter" component={SortFilterScreen} /> */}
    {/* </Stack.Navigator>
  );
} */}
