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
  Picker,
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


const DiarySchema = Yup.object().shape({
  entryTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  entry: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
});

const PersonalDiary = ({ navigation }) =>{
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { entryTitle: '', entry: ''},
    validationSchema: DiarySchema,
    onSubmit: e => navigation.navigate('ContactUs'),
  });


  const [entryTitle, setEntryTitle] = useState('');
  const [entry, setEntry] = useState('');
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [diaryList, setDiaryList] = useState(''); 

  const emptyState = () => {
    setEntryTitle('');
    setEntry('');
  };

  

  const handlePress = () => {
    if (!entryTitle) {
      Alert.alert('Entry title is required.');
    }
    if (!entry) {
      Alert.alert('Entry is required.');
    }
    var items
    var usersArray=[]
    axios.post("http://192.168.0.15:3000/api/personaldiary", {
      entryTitle: entryTitle,
      entry: entry,
    }).then(()=>{
      res =>{
        items=res.data
        var confirm="No"
        for (const [key, value] of Object.entries(items)) {
          if (entry===value.entry && entryTitle===value.entryTitle){
           
            confirm="Yes"
          }
        }
        if (confirm==="Yes"){
          navigation.navigate('DiaryList')
          Alert.alert("Entry has been submitted")
        }
        else{
          Alert.alert("Incorrect Entry title or entry")
        }
    
      } 
    });

  };


    return(
        <KeyboardAwareScrollView 
          extraScrollHeight={100} enableOnAndroid={true} 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={styles.container}>
          <ScrollView>
            <Text variant='title1' paddingTop='xl'>Personal Diary Page</Text>
            
            <Box 
            flexDirection='row' 
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
              <Text>This page is used to track your 
                    progress as each day passes, you 
                    have the option to give a title to 
                    your diary entry, select an option for
                    whether or not you smoked today and 
                    give detail on why you did or did not 
                    smoke this day to see if there are certain 
                    things that trigger you to smoke or things 
                    that aid with not smoking.
              </Text>
            </Box>
            <Text variant='title2' paddingTop='m'>Title of entry</Text>
            <Box marginTop='m'>
            <Box marginBottom='m'>
            <TextInput
              icon='mail'
              placeholder='Your entry title here'
              onBlur={handleBlur('entryTitle')}
              value={entryTitle}
              onChangeText={(entryTitle) => setEntryTitle(entryTitle)}
              error={errors?.title}
              touched={touched?.title}
            />
            </Box>
            <Text variant='title2' paddingTop='m'>Did you smoke today?</Text>

            <Box
            flexDirection='row'
            justifyContent='space-between'
            marginBottom='xl'
            marginTop='s'
            >

            <Picker
            selectedValue={selectedValue}
            style={{ height: '50%', width: '100%' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
          </Picker>

            </Box>
            
           <Text variant='title2' paddingTop='xl'>What was your reson for doing so?</Text>
           <Box marginTop='m'>
           <TextInput
              icon='mail'
              placeholder='Your entry here'
              onBlur={handleBlur('entry')}
              value={entry}
              onChangeText={(entry) => setEntry(entry)}
              error={errors?.entry}
              touched={touched?.entry}
            />
            </Box>
           </Box>

          <Box marginTop='xl' alignItems='center'>
          <Button
            variant='primary'
            label='Submit Entry'
            onPress={handlePress}
          />
          </Box>
          </ScrollView>
        </KeyboardAwareScrollView>
        
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
  });

export default PersonalDiary;