import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider, StatusBar } from "native-base";
import { CovidScreen, ArticleScreen, BedScreen, BedDetailScreen, ArticleDetailScreen, AboutScreen, SearchScreen } from "./screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#7c8cfc",
        tabBarInactiveTintColor: "black",
        tabBarStyle: { height: 65 },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 10 },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Articles"
        component={ArticleScreen}
        options={{
          tabBarLabel: "Articles",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-newspaper-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Covid"
        component={CovidScreen}
        options={{
          tabBarLabel: "Covid",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="analytics-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Bed"
        component={BedScreen}
        options={{
          tabBarLabel: "Bed",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-bed-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="information-circle-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#7c8cfc" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="CovidDetail" component={CovidScreen} />
          <Stack.Screen name="BedDetail" component={BedDetailScreen} />
          <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
