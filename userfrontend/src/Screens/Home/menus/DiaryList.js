import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../../Components/Button/Button';
import TextInput from '../../../Components/Form/TextInput';
import { Box, Text, useTheme } from '../../../Components/Theme';
import * as Yup from 'yup';
import { useFormik, Formik } from 'formik';
import CheckBox from '../../../Components/Form/CheckBox';
import axios from 'axios';


const DiaryList = () =>{
  const [diaryList, setDiaryList] = useState('');   

  const getDiaryList = () =>{
    axios.get("http://192.168.0.15:3000/api/diarylist").then((response)=>{
      setDiaryList(response.data);
      return(
          this.diaryList.map((val, key) =>{
              return (
              <View> 
              {val.entryTitle}
              {val.entries} 
              </View>)
          })
      )
      
    });
  };
    return(
        <ScrollView>
            <Text variant='title1' paddingTop='xl'>Diary Entries</Text>
            
            <Box 
            flexDirection='row' 
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
              <Text>This page is where you will find your previous diary entries.
              </Text>
            </Box>
            
          <Box marginTop='xl' alignItems='center'>
        <View style={styles.employees}>
          <Button
            variant='primary'
            label='Show entries'
            onPress={getDiaryList}
          />
          
        </View>
          </Box>
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    headerBox: {
      paddingTop: 50,
      paddingLeft: 10,
    },
    employees: {
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
    }
  });

export default DiaryList;