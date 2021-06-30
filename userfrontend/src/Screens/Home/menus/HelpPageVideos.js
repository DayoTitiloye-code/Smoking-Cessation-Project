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
  Linking,
  ScrollView
} from "react-native";
import TextInput from '../../../Components/Form/TextInput';
import { Box, Text, useTheme } from '../../../Components/Theme';
import Button from '../../../Components/Button/Button';
import * as Yup from 'yup';
import { useFormik, Formik } from 'formik';
import CheckBox from '../../../Components/Form/CheckBox';

const HelpPageVideos = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text variant='title1' paddingTop='xl'>Help Page (Videos)</Text>
            
            <Box 
            flexDirection='row' 
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
              <Text>This page is used to provide knowledge and tips in order to aid smoking cessasion. This page will be in the format of, the title of the video, a brief description of the video (to gain a quick grasp of what it is about), and a link to the video so that it can be watched and your knowledge and understanding of things such as, why you smoke, why it is hard to quit smoking, what happens when you quit smoking, and other great benefits can be increased!
              </Text>
            </Box>
            <ScrollView>
            {/* This is the first video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'This Is The Best Way To Quit Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'Seeker' which provides information on the best ways
                    to give up smoking.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=6ZuX-gr4LoU&ab_channel=Seeker')}}
            />
            </Box>

            {/* This is the second video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Quit Smoking | Stop Smoking | How To Quit Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'AbrahamThePharmacist' which provides information on why nicotine is so addictive,
                    how to quit smoking and the benefits of quiting smoking.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=4WYvJ5NJa1M&ab_channel=AbrahamThePharmacist')}}
            />
            </Box>


            {/* This is the third video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Why Give Up Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'DocUnlock' which provides information on tobacco and what it is,
                    nicotine and what it is, and why you should give up smoking.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=TfLCYRenA8Y&t=1s&ab_channel=DocUnlock')}}
            />
            </Box>
            
            {/* This is the fourth video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'How to quit tobacco smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'DocUnlock' which provides information on tobacco and what it is,
                    nicotine and what it is, and why you should give up smoking.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=TfLCYRenA8Y&t=1s&ab_channel=DocUnlock')}}
            />
            </Box>

            {/* This is the fith video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Alternatives to Quit Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'AllHealthGo' which provides information on alternatives to smoking,
                    they focus on the medical point of view (Pharmacology) to help smoking cessation.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=ursqVyy7wwQ&ab_channel=AllHealthGo')}}
            />
            </Box>


          {/* This is the sixth video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'What Happens to Your Body When You Quit Smoking?'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'Respiratory TherapyZone' which provides information on what happens
                    once smoking cessation starts. This includes answering questions like, How 
                    does smoking affect the respiratory, cardiovascular, immune and reproductive systems.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=ZhTOC0T3P3c&ab_channel=RespiratoryTherapyZone')}}
            />
            </Box>

          {/* This is the seventh video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'What is the Single Best Thing You Can Do to Quit Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a viral video by the youtube channel 
                    'DocMikeEvans' which provides information on the best techniques in
                    order to improve smoking cessation.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=z16vhtjWKL0&ab_channel=DocMikeEvans')}}
            />
            </Box>

          {/* This is the seventh video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Why Do People Smoke: The Real Reason'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'CBQ Method to Quit Smoking' which provides information on the 'real' reason
                    people smoke, even though they do not want to and why people relapse.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=PaoKWG2KjE4&ab_channel=CBQMethodtoQuitSmoking')}}
            />
            </Box>


          {/* This is the eigth video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'What Are the Nicotine Withdrawal Symptoms - And How to Cope'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is another video by the youtube channel 
                    'CBQ Method to Quit Smoking' which provides information on withdrawal symptoms 
                    of smoking cessation.           
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=PaoKWG2KjE4&ab_channel=CBQMethodtoQuitSmoking')}}
            />
            </Box>

          {/* This is the ninth video */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'What Happens When You Stop Smoking'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> This is a video by the youtube channel 
                    'AsapSCIENCE' which provides information on events that occur once
                    smoking cessation begins.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to watch!'
            onPress={ () => { Linking.openURL('https://www.youtube.com/watch?v=o3I0mJ2RfU0&ab_channel=AsapSCIENCE')}}
            />
            </Box>










            </ScrollView>            
        </View>

    )};

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
  
export default HelpPageVideos;