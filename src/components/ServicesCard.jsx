import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ServicesCard = ({data}) => {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.serviceText}>{data.title}</Text>
      <Image style={styles.serviceImg} source={data.image} resizeMode="cover" />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  serviceContainer: {
    backgroundColor: '#fff',
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceText: {
    color: '#000',
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 'bold',
  },
  serviceImg: {
    width: '100%',
    height: 130,
    borderRadius: 4,
  },
});
