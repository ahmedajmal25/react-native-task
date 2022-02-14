import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Button, Card, CardItem} from 'native-base';
import {Dimensions} from 'react-native';

const OverView = () => {
  return (
    <>
      <ScrollView style={{overflow: 'scroll', height:"100%"}}>
        <Card backgroundColor={'white'} style={{height: 400, flex:2}}>
          <View
            style={{
              display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              shadowOffset: 20,
              marginTop: 20,
              height: '100%',
              backgroundColor: 'white',
            }}>
            <CardItem
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft:20
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontWeight:'700',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  display: 'flex',
                }}>
                Price Index
              </Text>
            </CardItem>
            <View style={{display:"flex", flexDirection:"row", paddingLeft:20}} >
         
                <Text>
                    41 food court units -
                </Text>
           
           
                <Text style={{fontWeight:'700'}}>
                    4 units left
                </Text>
          
            </View>

            <View style={{display:"flex", flexDirection:"row", padding:5, width:"100%"}}>
                <Button style={{marginRight:5, justifyContent:"center", backgroundColor:"white"}}>
                    <Text style={{fontSize:10, width:100}}>
                        Food Court Shops
                    </Text>
                </Button>
                <Button style={{marginRight:5, justifyContent:"center", backgroundColor:"white"}}>
                    <Text style={{fontSize:10, width:140}}>
                        Residential Appartments
                    </Text>
                </Button>
                <Button style={{ justifyContent:"center", backgroundColor:"white"}}>
                    <Text style={{fontSize:10,  width:100}}>
                        Retail Shops
                    </Text>
                </Button>
            </View>

            <BarChart
              data={{
                labels: [
                  'Oct 2018',
                  'Nov 2018',
                  'Dec 2018',
                  'Jan 2019',
                  'Feb 2019',
                ],
                datasets: [
                  {
                    data: [0.5, 1.0, 1.5, 2.0, 2.5],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 20} // from react-native
              height={220}
              yAxisSuffix=" Crore"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#2aa65a',
                backgroundGradientFrom: 'blue',
                backgroundGradientTo: 'grey',
                paddingRight: 10,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'blue',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 6,
                paddingLeft:10
              }}
            />
          </View>
        </Card>
        {/* <View style={{display:'flex', flexDirection:"column", height:100}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            Construction Progress
          </Text>
        </View> */}

        <ScrollView scrollEventThrottle={16}>
      <Card style={{flex:1}}>
          <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20,paddingLeft:10}}>
          <Text style={{fontSize: 15, fontWeight: '700', paddingLeft:15}}>
            Construction Progress
          </Text>
            <View style={{height: 150, marginTop: 20}}>
              <ScrollView horizontal={true}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    margin: 5,
                    backgroundColor: 'white',
                  }}
                  >
                  <View style={{padding: 10}}>
                    <Image
                      source={require('../Assets/pexels-photo-302769.jpeg')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </View>
                <View  style={{
                    height: 130,
                    width: 130,
                    margin: 5,
                    backgroundColor: 'white',
                  }}>
                  <View style={{padding: 10}}>
                    <Image
                      source={require('../Assets/observation-urban-building-business-steel_1127-2397.jpeg')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </View>
                <View  style={{
                    height: 130,
                    width: 130,
                    margin: 5,
                    backgroundColor: 'white',
                  }}>
                  <View style={{padding: 10}}>
                    <Image
                      source={require('../Assets/modern-business-buildings-11681736.jpeg')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          </Card>
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default OverView;
