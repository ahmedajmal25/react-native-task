import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { Button } from 'native-base';

const PreviousInquiry = () => {
    const data = [
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Resolved',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
      {
        key: 'SP_M_112',
        date: 'Dec 16, 2020 1:00 PM',
        description: 'I need payment extensions for my commercial shop unit',
        status: 'Pending',
      },
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: 'white',
        }}>
       
        <ScrollView
          style={{maxHeight: '100%', width: '100%', backgroundColor: 'white', flex:1}}>
          <FlatList
            style={{maxWidth: '100%', backgroundColor: 'white'}}
            data={data}
            renderItem={({item}) => (
              <>
                <View style={{marginTop: 7, paddingLeft: 8, paddingTop:5,paddingBottom:5, borderColor:"grey", borderBottomWidth:0.2}}>
                  <Text
                    style={{
                      padding: 2,
                      fontSize: 12,
                      height: 25,
                      width: '100%',
                      color: '#4D8FFF',
                      fontWeight:'700'
                    }}>
                    {item.key}
                  </Text>
                  <Text
                    style={{
                      padding: 2,
                      fontSize: 12,
                      height: 20,
                      width: '100%',
                      color: '#4D8FFF',
                      fontWeight:'600'
                    }}>
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      padding: 2,
                      fontSize: 15,
                      height: 40,
                      width: '100%',
                      color: 'black',
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      padding: 2,
                      fontSize: 12,
                      height: 20,
                      width: '100%',
                      color: 'black',
                    }}>
                    Status:
                    {item.status === 'Resolved' ? (
                      <Text
                        style={{
                          padding: 2,
                          fontSize: 12,
                          height: 20,
                          width: '100%',
                          color: 'green',
                        }}>
                        {item.status}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          padding: 2,
                          fontSize: 12,
                          height: 20,
                          width: '100%',
                          color: 'orange',
                        }}>
                        {item.status}
                      </Text>
                    )}
                  </Text>
                </View>
              </>
            )}
          />
        </ScrollView>
      </View>
    );
  };
  
  export default PreviousInquiry;
  