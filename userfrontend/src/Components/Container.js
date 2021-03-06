import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, useTheme } from './Theme';
import Constants from 'expo-constants';

const { width, height: wHeight } = Dimensions.get('window');

const aspectRatio = 2400 / 3200;
const height = width * aspectRatio;

const Container = ({ children, footer, pattern }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView>
      <Box
        height={
          wHeight +
          (Platform.OS === 'android' ? Constants.statusBarHeight * 2.62 : 0)
        }
        backgroundColor='secondary'
      >
        <StatusBar barStyle='light-content' />
        <Box backgroundColor='white'>
          <Box
            borderBottomLeftRadius='xl'
            overflow='hidden'
            height={height * 0.6}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow='hidden'>
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              top: -height * 0.5,
              transform: [{ rotate: '-680deg' }],
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
          <Box
            flex={1}
            justifyContent='center'
            borderRadius='xl'
            padding='xl'
            borderTopLeftRadius={0}
            backgroundColor='white'
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor='secondary' padding='m'>
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  
  );
};

export default Container;
