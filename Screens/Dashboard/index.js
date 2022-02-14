import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

import OverView from '../Overview';
import ProjectUpdates from '../ProjectUpdates';

import MyUnitDetails from '../MyUnitDetails';
import Inquiries from '../Inquiries';

import {Icon} from 'native-base';
import {Badge} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Dashboard = props => {
  return (
    <>
      <View
        style={{
          height: 50,
          paddingTop: 10,
          paddingLeft: 10,
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../Assets/image-2.png')}
          style={{width: 40, height: 40, paddingLeft: 10}}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingRight: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{display: 'flex', flexDirection: 'column', marginTop:-4}}>
            <Badge
              badgeStyle={{backgroundColor: 'red', marginLeft:6}}
              value={12}></Badge>
            <Icon
              name="notifications-outline"
              type="Ionicons"
              style={{ fontSize: 26,
                marginRight: 16,
                marginTop:  -5,
                color:"black"}}
            />
          </View>
          <Image
            source={require('../Assets/images.jpeg')}
            style={{
              width: 40,
              height: 40,
              paddingLeft: 10,
              borderRadius: 20,
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="clipboard-notes" type="Foundation" />
            ),
          }}
          name="Overview"
          component={OverView}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => <Icon name="project" type="Octicons" />,
          }}
          name="Project Updates"
          component={ProjectUpdates}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="clipboard-notes" type="Foundation" />
            ),
          }}
          name="My Unit Details"
          component={MyUnitDetails}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon
                name="frequently-asked-questions"
                type="MaterialCommunityIcons"
              />
            ),
          }}
          name="Inquiries"
          component={Inquiries}
        />
      </Tab.Navigator>
    </>
  );
};

export default Dashboard;
