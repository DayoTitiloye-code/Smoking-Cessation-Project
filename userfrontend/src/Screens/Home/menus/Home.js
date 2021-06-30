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
} from "react-native";
import Modal from "react-native-modal";
import TextInput from '../../../Components/Form/TextInput';
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Header from '../mycomponents/Header';
import { Box, Text } from '../../../Components/Theme';
import Button from '../../../Components/Button/Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const { width } = Dimensions.get("window");


const HomeTab = (navigation) => {
  const [isModalVisible, setModalVisible] = useState(false);
 

  return (

    <Container>
      
      <Header headerTitle='Home' />

      <StatusBar style="auto" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor:white;
 
`;


const styles = StyleSheet.create({

viewWrapper: {
    flex: -0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    
},
modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -90 }],
    height: 200,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 20,
},
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
}
});

export default HomeTab;
