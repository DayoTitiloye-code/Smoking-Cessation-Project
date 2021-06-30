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

const HelpPageArticles = ({navigation}) =>{
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
              {/* This is the first article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Physician advice for smoking cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This article is based around physician's advice 
              when it comes to smoking cessation and how effective it is, 
              it compared different measures of intervention.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000165.pub4/full#CD000165-abs-0001')}}
            />
            </Box>


            {/* This is the second article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Serious games for smoking prevention and cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This article tries to see whether serious 
              health games have the potential to prevent 
              smoking and smoking's health consequences. 
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://watermark.silverchair.com/ocaa013.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAp8wggKbBgkqhkiG9w0BBwagggKMMIICiAIBADCCAoEGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMHHJATjvlf8dETpE2AgEQgIICUvhCacHSv6Wm7GkcbSOB4oqGwogX4icPIZ-Oxc4Iuw6N-WUgECdlg21iDlR0Wr4nFOobGxaHsKcs_pi8jpZE8971VDi-aHkPu4mZnU5jGGzcZQL-Z1c5J5n1gO_regL1s7cmxLhcR5sSfgisSpCLu1MSDAEAv-dCn2uvsxSE64ExnoohbtfSHT56KQiXOSFD95j5kcdP7pIS-hYrN4zXh89TkBoKo5Ms9s24tHglZ_eYkKCSn0Af_7EVBBAKat7nNtS6YqhpvXv4sQzNqSXUOqUqNANke0TLCG0kx5Cqrem-O3MdamsWblvzq-_qofV0zGLjsHDyDhJEtIpv3FUHvZ-ktfftOPOQ4ye-SC_J2gkWoipqVzMPWGwfgSgxY4rGOkOjkCtXdws3osg3rR_9we9KiOOxs6FnM8En5bGOBCg-w3vIkXNtKaVXdzwjBvtRd8wjisoNlAm362Kk_OJ7R_KtaoEAzLIMtSVTF3fdqRoi2u3Wv6hijmDNszhi-GVRd93H29eBULLX_d4UG2Dr0PmoaH240ngAl9tUkgboNFTVFcRqrJFysEE2_1s2E3GHirhIbUTGUuT4e2EnXnkO1OUA9vcqrDbXg-lp96jiR3wfFJ4ZL2m-FELRCteYb00R8stHtJj8EUi1ybz5BezokH1ty5YeANytMRpn5by2frp3Dys2-tICVaC68v9ZrGhwxJiMdK44zZIpF1kas7Wlnijk3HOqm-FXZYCqPD3na0keoJ8J-7rpSSd-FYaq6anXsjpvkmAOVbc8b5sfr3N2mtmkWw')}}
            />
            </Box>


          {/* This is the third article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Antecedents and Consequences of the Perceived Usefulness of Smoking Cessation Online Health Communities'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study's main aim is to see how 
              useful online health communities (OHCs) are
              when it comes to smoking cessation. 
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://scholarspace.manoa.hawaii.edu/bitstream/10125/63827/0071.pdf')}}
            />
            </Box>



            {/* This is the fourth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'From Digital Community Engagement to Smoking Cessation: Insights from the Reddit r/StopSmoking Thread'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This paper speaks about how social media has 
              become increasingly popular when people are 
              trying to quit smoking. People try to find 
              support to help them give up smoking and this 
              paper focuses mainly on the social media 
              platform Reddit, specifically the subreddit 
              r/StopSmoking. 
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://scholarspace.manoa.hawaii.edu/bitstream/10125/71095/0389.pdf')}}
            />
            </Box>


            {/* This is the fifth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Evaluation of user satisfaction and usability of a mobile app for smoking cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This paper looks at the flaws and effectiveness 
              of mobile app based on smoking cessation. 
              They base this on user satisfaction whilst 
              using the application. The study believes 
              that mobile apps have great potential to 
              encourage smoking cessation however users still 
              reject them. 
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://doi.org/10.1016/j.cmpb.2019.105042')}}
            />
            </Box>


            {/* This is the sixth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Antidepressants for smoking cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study looks at antidepressants and the 
              way they can help smoking cessation. They 
              believe that nicotine withdrawal may produce 
              symptoms of depression/ depressive episodes, 
              nicotine can produce antidepressant effects 
              than keep people smoking and finally, some 
              antidepressants can have an effect on neural 
              pathways or receptors underlying nicotine addiction.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000031.pub5/full')}}
            />
            </Box>


            {/* This is the seventh article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Qualitative and Sensitivity Analysis of the Effect of Electronic Cigarettes on Smoking Cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study looks at the effect of electronic 
              cigarettes (e-cigarettes) on smoking cessation. 
              The study constructed a mathematical model using 
              various scenarios to prove the efficacy of e-cigarettes.
              The study claims that the role of e-cigarettes in 
              smoking cessation are increasing and they are considered
              less harmful to an individuals health when 
              compared to tobacco cigarettes.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://doi.org/10.1155/2018/3738584')}}
            />
            </Box>


            {/* This is the eigth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Qualitative and Sensitivity Analysis of the Effect of Electronic Cigarettes on Smoking Cessation'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study looks at the effect of electronic 
              cigarettes (e-cigarettes) on smoking cessation. 
              The study constructed a mathematical model using 
              various scenarios to prove the efficacy of e-cigarettes.
              The study claims that the role of e-cigarettes in 
              smoking cessation are increasing and they are considered
              less harmful to an individuals health when 
              compared to tobacco cigarettes.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://doi.org/10.1155/2018/3738584')}}
            />
            </Box>


          {/* This is the ninth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Smoking Cessation Causes: Contrasting
            Evidence from Social Media and Online Forums'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study looks at smoking cessation causes 
              using evidence from social media. It does 
              this by using an automated-based system created 
              to gather stories from 'iCanQuit', a website that 
              is helpful for smokers at all stages of their quit 
              smoking journeys, and smoking cessation related 
              tweets based in the United Kingdom (U.K.) from Twitter. 
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('http://ceur-ws.org/Vol-1840/paper_5.pdf')}}
            />
            </Box>


          {/* This is the tenth article */}
            <Box
            paddingTop='l'
            justifyContent='space-between' 
            alignItems='center'
            textAlign='center'>
            <Box
            marginBottom='m'>
            <Text variant='title2' paddingTop='m' textAlign='center'>'Factors Associated With Successful Smoking Cessation in the United States, 2000'</Text>
            </Box>
            <Box
            marginBottom='m'>
              <Text textAlign='center'> 
              This study looks at factors associated with 
              'successful quitting so that cessation programs 
              could be tailored to those at highest risk for relapse'.
              </Text>
            </Box>
            <Button
            variant='primary'
            label='Click me to read!'
            onPress={ () => { Linking.openURL('https://ajph.aphapublications.org/doi/10.2105/AJPH.2005.083527')}}
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
  
export default HelpPageArticles;