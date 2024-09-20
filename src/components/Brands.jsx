import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands Of The Day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image
              resizeMode="cover"
              source={require('../assets/brand1.jpeg')}
              style={styles.img}
            />
            <Text style={styles.brandTitle}>Min 20% off</Text>
          </View>
          <View style={styles.brands}>
            <Image
              resizeMode="cover"
              source={require('../assets/brand2.jpeg')}
              style={styles.img}
            />
            <Text style={styles.brandTitle}>
              Min 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image
              resizeMode="cover"
              source={require('../assets/brand3.jpeg')}
              style={styles.img}
            />
            <Text style={styles.brandTitle}>
              Heels - Up to 50% OFF on Heeled Sandals,High Heel
            </Text>
          </View>
          <View style={styles.brands}>
            <Image
              resizeMode="cover"
              source={require('../assets/brand4.jpeg')}
              style={styles.img}
            />
            <Text style={styles.brandTitle}>
              Sony 60W Bluetooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {marginTop: 10, borderTopWidth: 1, borderTopColor: '#ddd'},
  innerContainer: {},
  title: {fontSize: 18, color: '#000', padding: 10, fontWeight: 'bold'},
  row: {flexDirection: 'row'},
  brands: {width: '50%', padding: 10},
  img: {width: '100%', height: 150, borderRadius: 8},
  brandTitle: {color: '#000', fontSize: 12, marginTop: 4},
});
