import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/HomeScreen";

const Stack = createNativeStackNavigator();
function AppNavigations(){
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Home" options={{headerShown:false}} component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}

export default AppNavigations