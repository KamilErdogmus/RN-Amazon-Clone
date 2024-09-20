import {StyleSheet, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
      <Feather style={styles.icon} name="map-pin" size={16} color="#000" />
      <Text style={styles.text}>Deliver to Turkey - 1234567</Text>
      <SimpleLineIcons
        style={styles.icon}
        name="arrow-down"
        size={10}
        color="#000"
      />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
  icon: {
    marginHorizontal: 5,
  },
});
