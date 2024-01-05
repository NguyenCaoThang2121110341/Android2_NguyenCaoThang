
import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './component/Menu';
import Home from './pages/Home';
import Header from './component/Header';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function App() {


  
  return (

    
      //  {activeMenuItem === 'Home' && <Home />}
      // {activeMenuItem === 'Login' && <Login />}
      // {activeMenuItem === 'Cart' && <Cart />}
      // <MenuactiveMenuItem={activeMenuItem}onMenuItemPress={handleMenuItemPress} />

    
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
    {/* <Header></Header> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen

          name="Home"
          component={Home}
          options={{ headerTitle: 'HOME' }} // Thay đổi tiêu đề hiển thị
        />
        <Stack.Screen name="SingleProduct" component={ProductDetail} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: 'LOGIN' }} // Thay đổi tiêu đề hiển thị
        />
         <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerTitle: 'CART' }} // Thay đổi tiêu đề hiển thị
        />
      </Stack.Navigator>
      <Menu/>
    </NavigationContainer>
    
  </View>
  );
};
const styles = StyleSheet.create({

})