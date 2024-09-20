import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#000" />
            <TextInput
              style={styles.textInput}
              placeholder="Search Amazon"
              placeholderTextColor="#848484"
              onChangeText={text => console.log(text)}
            />
          </View>
          <AntDesign name="scan1" size={22} color="#000" />
        </View>
        <Ionicons name="mic" size={22} color="#000" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#a1bcc0',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    width: width * 0.9,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 8,
  },
});
