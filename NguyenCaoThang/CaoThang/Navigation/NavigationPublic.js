
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
const Stack = createNativeStackNavigator();



function Navigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default Navigation;