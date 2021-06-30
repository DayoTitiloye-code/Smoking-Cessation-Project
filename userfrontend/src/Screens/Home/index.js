import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTab from './menus/Home'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View,Text,Dimensions} from 'react-native'
import PersonalDiary from './menus/PersonalDiary';
import HelpPageVideos from './menus/HelpPageVideos';
import HelpPageArticles from './menus/HelpPageArticles';
import ContactUs from './menus/ContactUs';
import DiaryList from './menus/DiaryList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Drawer } from 'react-native-paper';


const Tab = createBottomTabNavigator();
const HomeDrawer = createDrawerNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator>
      
      <Tab.Screen name="Home" component={HomeTab}
      options={{
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="home" color="#129793" size={26} />
        )
      }}
      />
      
    </Tab.Navigator>
  );
}

export const HomeNavigator = () => {
  return (
    <HomeDrawer.Navigator>
      <HomeDrawer.Screen name='Personal Diary' component={PersonalDiary}/>
      <HomeDrawer.Screen name='Help Page (Videos)' component={HelpPageVideos}/>
      <HomeDrawer.Screen name='Help Page (Articles)' component={HelpPageArticles}/>
      <HomeDrawer.Screen name='Diary Entries' component={DiaryList}/>
      <HomeDrawer.Screen name='Contact Us' component={ContactUs}/>
    </HomeDrawer.Navigator>

 );
};


 
