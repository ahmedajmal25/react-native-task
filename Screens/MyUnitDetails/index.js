import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Card, CardItem, Button} from 'native-base';
import * as Progress from 'react-native-progress';

const MyUnitDetails = () => {
  return (
    <>
    <ScrollView style={{overflow: 'scroll', height:"100%"}}>
      <Card style={{flex: 2, height: 200}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          <View>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Unit Details</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              paddingTop: 20,
            }}>
            <Text>Floor: 7th floor            Unit No: FC-335</Text>
            <Text></Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '900%',
              paddingTop: 20,
            }}>
            <Text>Size: 1020 sq.ft          Purchase Rate: 9000 sq.ft</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: 20,
            }}>
            <Text>Price: 9,068,210PKR Sold Date: 09/12/2021</Text>
            <Text></Text>
          </View>
        </View>
      </Card>
      <Card style={{flex: 1}}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              paddingLeft: 10,
            }}>
            <Text style={{fontSize: 13, fontWeight: '700'}}>
              Total Amount:
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              1 crore, 1 lac and 60 thousand ruppees
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              paddingLeft: 10,
            }}>
            <Text style={{fontSize: 13, fontWeight: '700'}}>Amount Paid: </Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              38 lac, 11 thousand, 7 hundred and 50 ruppees
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              paddingLeft: 10,
            }}>
            <Text style={{fontSize: 13, fontWeight: '700'}}>Total Left: </Text>
            <Text style={{fontSize: 12, fontWeight: '400'}}>
              63 lac, 48 thousand, 2 hundred and 50 ruppees
            </Text>
          </View>

          <View style={{paddingLeft:20, paddingTop:20}}>
            <Progress.Bar progress={63/100} unfilledColor='blue' width={300} height={20} color='#2aa65a'/>
          </View>

          <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", alignContent:"center", marginTop:20}}>
              <Button  style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", marginTop:20, backgroundColor:"white"}}>
                  <Text>
                      View Payment Plan
                  </Text>
              </Button>
              <Button style={{display:"flex", justifyContent:"center", alignItems:"center", alignContent:"center", marginTop:20, backgroundColor:"white"}}>
                  <Text>
                      View Payment Plan
                  </Text>
              </Button>

          </View>
        </View>
      </Card>
      </ScrollView>
    </>
  );
};

export default MyUnitDetails;
