import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductData} from '../data/ProductData';
import ProductCard from '../components/ProductCard';

const ProductScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Results</Text>
        <Text style={styles.headerText}>
          Price and other details may vary based on product and color.
        </Text>
        {ProductData.map(data => (
          <ProductCard key={data.id} data={data} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 15,
  },
});
