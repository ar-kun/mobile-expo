import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Karyawan from '../assets/Karyawan';
const Home = ({ navigation }) => {
  const [data, setData] = useState(Karyawan);
  const listKaryawan = ({ item }) => {
    return (
      <Card
        style={styles.cardUtama}
        onPress={() => navigation.navigate('Detail', { karyawan: item })}>
            
        <View style={styles.cardView}>
                   
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
            source={{ uri: item.foto }}
          />
                 
          <View style={{ marginLeft: 12 }}>
                      <Text style={styles.teks}>{item.nama}</Text>
                      <Text style={styles.teks}>{item.jabatan}</Text>
                   
          </View>
              
        </View>
           
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
         
      <FlatList
        data={data}
        renderItem={listKaryawan}
        keyExtractor={(item) => item.id}
      />
       
    </View>
  );
};
const styles = StyleSheet.create({
  cardUtama: {
    margin: 5,
    shadowColor: '#47000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardView: {
    flexDirection: 'row',
    padding: 6,
  },
  teks: { fontsize: 16 },
});
export default Home;
