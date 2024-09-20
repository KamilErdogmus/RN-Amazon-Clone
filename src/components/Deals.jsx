import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RecomendedProduct from '../assets/recommend.jpg';

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommended Deal For You</Text>
      <Image style={styles.img} source={RecomendedProduct} />

      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Text style={styles.offDealText}>10% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>$89.99</Text>
          <Text style={styles.price}>$99.99</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin types
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.see}>See All Deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    height: 250,
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
  },
  bottomSection: {
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#be0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  offDealText: {
    fontSize: 12,
    color: '#fff',
  },
  deal: {
    fontSize: 12,
    marginLeft: 6,
    color: '#be0201',
    fontWeight: '600',
  },
  discountPrice: {
    color: '#000',
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    marginLeft: 7,
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: '#000',
    fontSize: 14,
  },
  see: {
    color: '#017185',
    marginVertical: 10,
    fontSize: 14,
  },
});
