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

const ContactSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  reason: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
});

const ContactUs = ({ navigation }) =>{
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
    validationSchema: ContactSchema,
    onSubmit: e => navigation.navigate('PersonalDiary'),
  });


  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [selectedValue, setSelectedValue] = useState("Yes");

  const emptyState = () => {
    setEmail('');
    setReason('');
  };

  const handlePress = () => {
    axios.post("http://192.168.0.15:3000/api/contactus", {
      email: email,
      reason: reason,
    }).then(()=>{
      alert('Contact successful!');
    });
  };
  
    return(
        <KeyboardAwareScrollView 
          extraScrollHeight={100} enableOnAndroid={true} 
          keyboardShouldPersistTaps='handled'
          contentContainerStyle={styles.container}>
          <ScrollView>
            <Text variant='title1' paddingTop='xl'>Contact us Page</Text>
            
            <Box 
            flexDirection='row' 
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
              <Text>This page is a page whereby you are
                    able to contact us for any reason, for instance, to tell us
                    you like the application and why, to tell us
                    you do not like the application and why so we can 
                    make improvements and if you are struggling or
                    need more help with your smoking cession journey,
                    please feel free to contact us. 
              </Text>
            </Box>
            <Text variant='title2' paddingTop='m'>Email we can reach you at</Text>
            <Box marginTop='m'>
            <Box marginBottom='m'>
            <TextInput
              icon='mail'
              placeholder='Your email here'
              onBlur={handleBlur('email')}
              value={email}
              onChangeText={(email) => setEmail(email)}
              error={errors?.email}
              touched={touched?.email}
            />
            </Box>
            <Text variant='title2' paddingTop='m'>Reason for contacting us</Text>

            <Box
            flexDirection='row'
            justifyContent='space-between'
            marginBottom='xl'
            marginTop='xl'
            >

            <Picker
            selectedValue={selectedValue}
            style={{ height: '50%', width: '100%' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Need help with smoking cessation" value="help" />
              <Picker.Item label="Need to praise this application" value="praise" />
              <Picker.Item label="Need to critique this application" value="critique" />
          </Picker>

            </Box>
            
           <Text variant='title2' paddingTop='xl'>Please expand on why you are contacting</Text>
           <Box marginTop='m'>
           <TextInput
              icon='mail'
              placeholder='Your reason here'
              onBlur={handleBlur('reason')}
              value={reason}
              onChangeText={(reason) => setReason(reason)}
              error={errors?.reason}
              touched={touched?.reason}
            />
            </Box>
           </Box>

          <Box marginTop='m' alignItems='center'>
          <Button
            variant='primary'
            label='Contact us now!'
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

export default ContactUs;