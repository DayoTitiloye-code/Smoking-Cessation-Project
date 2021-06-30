import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from './Theme';

const HomeFooter = ({ title, action, onPress }) => {
  return (
    <>
      <Box alignItems='center' justifyContent='center' >
        <TouchableOpacity {...{ onPress }}>
          <Box flexDirection='row' justifyContent='center'>
            <Text variant='button' color='white'>
              {title}
            </Text>
            <Text variant='button' color='success' marginLeft='s'>
              {action}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default HomeFooter;
