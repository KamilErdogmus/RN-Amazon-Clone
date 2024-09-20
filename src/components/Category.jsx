import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Categories} from '../data/categories';
import {useNavigation} from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {Categories.map(category => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          key={category.id}
          style={styles.category}
          activeOpacity={0.7}>
          <Image
            style={styles.img}
            source={category.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {padding: 10},
  category: {paddingHorizontal: 8, alignItems: 'center'},
  img: {width: 50, height: 50, marginBottom: 4},
  title: {color: '#2c4341', fontSize: 12},
});
