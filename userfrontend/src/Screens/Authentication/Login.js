import React,{useState} from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../Components/Button/Button';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Box, Text } from '../../Components/Theme';
import CheckBox from '../../Components/Form/CheckBox';
import Link from '../../Components/Link';
import Footer from '../../Components/Footer';
import {Alert, View, StyleSheet} from 'react-native'
import axios from 'axios'
const ip=require('./ipconfig.json')

const emailValidator = (email: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ({ navigation }) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: '', password: '', rememberMe: true },
    validationSchema: LoginSchema,
    onSubmit: e => navigation.navigate('Home'),
  });

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }
    if (!password) {
      Alert.alert('Password field is required.');
    }
    var items
    var usersArray=[]
    axios.get(ip.ip).then(
      res =>{
        items=res.data
        var confirm="No"
        for (const [key, value] of Object.entries(items)) {
          console.log(`${key}: ${JSON.stringify(value.first_name)}`);
          if (email===value.email && password===value.password){
           
            confirm="Yes"
          }

          
        }
        if (confirm==="Yes"){
          navigation.navigate('Home')
        }
        else{
          Alert.alert("Incorrect Email or Password")
        }
    
      }
    )

  };
  return (
    <View style={styles.container}>
      <Text variant='title1' textAlign='center' marginBottom='l'>
      Log In
      </Text>
      <Box>
        <Box marginBottom='m'>
          <TextInput
            icon='mail'
            placeholder='Enter your Email'
            onBlur={handleBlur('email')}
            value={email}
            validator={emailValidator}
            onChangeText={(email) => 
                
                setEmail(email.replace(/\s/g, ''))}
            
            error={errors?.email}
            touched={touched?.email}
          />
        </Box>
        <Box marginBottom='m'>
          <TextInput
            icon='lock'
            placeholder='Enter your Password'
            onBlur={handleBlur('password')}
            value={password}
            onChangeText={(password) => setPassword(password.replace(/\s/g, ''))}
            
            error={errors?.password}
            touched={touched?.password}
            secureTextEntry
          />
        </Box>
        <Box
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          marginBottom='m'
        >
          <CheckBox
            label='Remember me'
            checked={values.rememberMe}
            onChange={() => setFieldValue('rememberMe', !values.rememberMe)}
            style={styles.checkbox}
          />
        </Box>
        <Box marginTop='m' alignItems='center'>
          <Button
            variant='primary'
            label='Log into your account'
            onPress={handlePress}
            
          />
        </Box>
      </Box>
      <Footer
      title="Don't have an account?"
      action='Signup here'
      onPress={() => navigation.navigate('Signup')}
    />
    
    </View>
  
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  black:{
    color: 'black',
  },
});
export default Login;