import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import Container from '../../Components/Container';
import TextInput from '../../Components/Form/TextInput';
import { Box, Text } from '../../Components/Theme';
import Footer from '../../Components/Footer';
import Button from '../../Components/Button/Button';
import {Alert,ScrollView} from 'react-native'
import axios from 'axios'
const ip=require('./ipconfig.json')

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

const Signup = ({ navigation }) => {

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { name: '',lname:'', email: '', password: '' },
      validationSchema: LoginSchema,
      onSubmit: e => console.log(e),
    }
  );

  const footer = (
    <Footer
      title='Already have an account?'
      action='Login here'
      onPress={() => navigation.navigate('Login')}
    />
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emptyState = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert('First name is required');
    } 
    else if (!lastName) {
      Alert.alert('Last Name field is required.');
    }
    else if (!email) {
      Alert.alert('Email field is required.');
    } else if (!password) {
      Alert.alert('Password field is required.');
    } else if (!confirmPassword) {
      setPassword('');
      Alert.alert('Confirm password field is required.');
    } else if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
    } else {
      var items
      var usersArray=[]
      axios.get(ip.ip).then(
        res =>{
          items=res.data
          var confirm="No"
          for (const [key, value] of Object.entries(items)) {
            console.log(`${key}: ${JSON.stringify(value.first_name)}`);
            if (email===value.email){
              confirm="Yes"
            }
          }
          if (confirm==="Yes"){
            Alert.alert("Email Already Exist")
          }
          else{
            
            axios.post(ip.ip,{
              first_name:firstName,
          last_name:lastName,
          email:email,
          password:password
            }).then(res=>{
                 navigation.navigate('Login');
            emptyState();
            }
            
            )
          }
      
        }
      )  
    }
  };
  return (
    <View style={styles.container}>
      <Text variant='title1' textAlign='center' marginBottom='l' marginTop='xl'>
        Create an account
      </Text>
    <ScrollView>
      <Box>
          <Box marginBottom='l'>
          <TextInput
            icon='user'
            placeholder='Enter your First Name'
            onBlur={handleBlur('First Name')}
            value={firstName}
            onChangeText={(name) => setFirstName(name)}
            error={errors.name}
            touched={touched?.name}
            
          />
        </Box>
        <Box marginBottom='l'>
          <TextInput
            icon='user'
            placeholder='Enter your Last Name'
            onBlur={handleBlur('lastName')}
            value={lastName}
            onChangeText={(lname) => setLastName(lname)}
            error={errors?.name}
            touched={touched?.name}
          />
        </Box>
      
        <Box marginBottom='l'>
          <TextInput
            icon='mail'
            placeholder='Enter your Email'
            onBlur={handleBlur('email')}
            value={email}
          onChangeText={(email) => setEmail(email.replace(/\s/g, ''))}
            error={errors?.email}
            touched={touched?.email}
            validate={validateEmail}
          />
        </Box>
        <Box marginBottom='l'>
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
        <Box marginBottom='l'>
          <TextInput
            icon='lock'
            placeholder='Retype your password to confirm'
            onBlur={handleBlur('confirmPassword')}
            value={confirmPassword}
          onChangeText={(password2) => setConfirmPassword(password2.replace(/\s/g, ''))}
            error={errors?.password}
            touched={touched?.password}
            secureTextEntry
          />
        </Box>
        <Box marginTop='m' alignItems='center'>
          <Button
            variant='primary'
            label='Create your account'
            onPress={handlePress}
          />
        </Box>
        </Box>  
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default Signup;

