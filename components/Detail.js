import React from 'react';
import { Text, View, StyleSheet, Image, Button, Linking } from 'react-native';
import { LinierGradient } from 'expo-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const Detail = ({ route, navigation }) => {
  const { karyawan } = route.params;
  return (
    <View style={{ Flex: 1 }}>
            
      <LinierGradient
        colors={['#0033ff', '#6bc1ff']}
        style={{ height: '20%' }}
      />
            /* menampilkan foto karyawan*/       
      <View style={{ alighnItems: 'center' }}>
                 
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 120 / 2,
            marginTop: -50,
          }}
          source={{ uri: karyawan.foto }}
        />
              
      </View>
            /*menampilkan nama karyawan */       
      <View style={{ alighnItems: 'center', margin: 15 }}>
                <Title>{karyawan.nama}</Title>
                <Text style={{ fontSize: 14 }}>{karyawan.jabatan}</Text>
              
      </View>
            /*menampilkan email */       
      <Card style={{ margin: 3 }}>
                 onPress=
        {() => {
          Linking.openURL('mailto:${karyawan.email}');
        }}
        >           
        <View style={{ flexDirection: 'row', padding: 8 }}>
                    
          <MaterialIcons name="email" size={32} color="#006aff" />
                    <Text style={styles.teks}>{karyawan.email}</Text>
                  
        </View>
              
      </Card>
          *menampilkan Telephone */       
      <Card style={{ margin: 3 }}>
                 onPress=
        {() => {
          Linking.openURL('tel:${karyawan.phone}');
        }}
        >           
        <View style={{ flexDirection: 'row', padding: 8 }}>
                    
          <Entypo name="phone" size={32} color="#006aff" />
                    <Text style={styles.teks}>{karyawan.phone}</Text>
                  
        </View>
              
      </Card>
            /*menampilkan gaji  */       
      <Card style={{ margin: 3 }}>
                
        <View style={{ flexDirection: 'row', padding: 8 }}>
                    
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
                    <Text style={styles.teks}>{karyawan.gaji}</Text>
                  
        </View>
              
      </Card>
            /*tombol navigasi*/       
      <View style={{ padding: 10 }}>
                
        <Button title="Go Back" onPress={() => navigation.navigated('Home')} />
              
      </View>
           
    </View>
  );
};

const styles = StyleSheet.create({
  teks: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 5,
  },
});
export default Detail;
