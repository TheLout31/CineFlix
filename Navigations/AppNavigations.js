import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/HomeScreen";
import MovieDetails from "../Screens/MovieDetails";
import SearchScreen from "../Screens/SearchScreen";
const Stack = createNativeStackNavigator();
function AppNavigations(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Home" options={{headerShown:false}} component={HomeScreen}/>
            <Stack.Screen name = "Details" options={{headerShown:false}} component={MovieDetails}/>
            <Stack.Screen name = "Search" options={{headerShown:false}} component={SearchScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}

export default AppNavigations