import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'native-base';

import PreviousInquiry from './previousInquiry';
import NewInquiry from './newInquiry';
const Inquiries = () => {
  const [inquiry, setInquiry] = useState('');
  const [data, setData] = useState([]);

  //this can  be used to set data in previous inquiries
  //   const sendData = (data) => {
  //         setData(data)
  //   }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{flex: 2, maxHeight: '15%', flexDirection: 'row'}}>
        <Button
          style={{
            backgroundColor: '#F3F3F3',
            color: 'black',
            shadowOffset: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            setInquiry('previous');
          }}>
          <Text style={{color: 'black', width: 150, paddingLeft: 15}}>
            Previous Inquiry
          </Text>
        </Button>
        <Button
          style={{
            backgroundColor: '#F3F3F3',
            color: 'black',
            shadowOffset: 10,
            borderColor: 'black',
            borderWidth: 1,
            margin: 5,
            borderRadius: 5,
          }}
          onPress={() => {
            setInquiry('new');
          }}>
          <Text style={{color: 'black', width: 150, paddingLeft: 15}}>
            Make New Inquiry
          </Text>
        </Button>
      </View>
      <View></View>

      {inquiry == 'previous' ? <PreviousInquiry /> : <NewInquiry />}
    </View>
  );
};

export default Inquiries;
