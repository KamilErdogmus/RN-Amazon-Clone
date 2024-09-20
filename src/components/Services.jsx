import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQR from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{paddingRight: 20}}
      style={styles.main}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.img} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.img} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.img} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.img} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
      </View>

      {RecentSearchData.map(data => (
        <ServicesCard key={data.id} data={data} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  main: {marginTop: -80, paddingHorizontal: 10},
  container: {backgroundColor: '#fff', borderRadius: 6},
  row: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  innerContainer: {padding: 10, paddingTop: 15, alignItems: 'center'},
  img: {width: 50, height: 50, borderRadius: 25},
  title: {color: '#000', fontSize: 11, marginTop: 2, fontWeight: 'bold'},
});
