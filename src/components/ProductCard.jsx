import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getRating} from './../utils/helpers';

const ProductCard = ({data}) => {
  return (
    <View style={styles.productSection}>
      <View style={styles.productImgSection}>
        <Image source={data.image} style={styles.img} />
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.sponsored}>Sponsored</Text>
        <Text style={styles.name}>{data.productName}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>{data.rating}</Text>
          {getRating(data.rating)}
          <Text style={styles.ratingCount}>{data.ratingCount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{data.price}</Text>
          <Text style={styles.crossOutText}>{data.crossOutText}</Text>
        </View>
        <Text style={styles.cashback}>
          Up to 5% cashback with Amazon Pay Credit Card
        </Text>
        <Image
          style={styles.logo}
          source={require('../assets/prime-logo.png')}
          resizeMode="cover"
        />
        <Text style={styles.cashback}>FREE delivery {data.deliveryBy}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productSection: {
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    marginVertical: 16,
    borderRadius: 4,
    overflow: 'hidden',
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  img: {width: '100%', height: 150},
  detailSection: {width: '60%', padding: 10},
  sponsored: {fontSize: 11, color: '#000'},
  name: {fontSize: 12, color: '#000', lineHeight: 18},
  row: {flexDirection: 'row', marginTop: 2, alignItems: 'center'},
  rating: {fontSize: 10, color: 'blue', marginRight: 5},
  ratingCount: {fontSize: 10, color: 'blue'},
  price: {fontSize: 16, color: '#000', marginRight: 5},
  crossOutText: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {fontSize: 9, marginVertical: 3},
  logo: {height: 16, width: 42},
});
