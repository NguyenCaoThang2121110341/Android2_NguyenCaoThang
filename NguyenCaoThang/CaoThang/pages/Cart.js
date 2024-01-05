import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,Button } from 'react-native';

export default function Cart({ route }) {
  const { cartItems} = route.params;
  const [items, setItems] = useState(cartItems);
 


  const handleRemoveFromCartPress = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    route.params.onRemoveFromCart(productId); // Call the callback function passed from the Home component
  };
  // useEffect(() => {
  //   setItems(cartItems);
  // }, [cartItems]);

 
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>Price: ${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleRemoveFromCartPress(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
      {/* <Button title="Remove" onPress={() => handleRemoveFromCartPress(item.id)} /> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Products</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.cartList}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'green'
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
  cartList: {
    flexGrow: 1,
    marginTop: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    marginTop: 8,
  },
  checkoutButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});