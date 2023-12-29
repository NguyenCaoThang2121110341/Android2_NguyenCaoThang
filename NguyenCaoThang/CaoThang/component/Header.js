import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../assets/lg.png')} style={styles.logo} />
            {/* <Text style={styles.headerText}>App Bán Hàng</Text> */}

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f2f2f2',
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // marginBottom: 10,
    },
    // headerText: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
    logo: {
        width: 300,
        height: 50,
        marginLeft:50,
    },
});
