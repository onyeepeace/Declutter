import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Dimensions} from 'react-native'

import {Feather} from "@expo/vector-icons"

import { 
  ProfileScreen, 
  MessageScreen, 
  ActivityScreen, 
  ListScreen, 
  ReportScreen, 
  StatisticsScreen, 
  SignOutScreen 
} from './screens';

import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator(
  {
    ProfileScreen, 
    MessageScreen, 
    ActivityScreen, 
    ListScreen, 
    ReportScreen, 
    StatisticsScreen, 
    SignOutScreen
  }, 
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(DrawerNavigator);