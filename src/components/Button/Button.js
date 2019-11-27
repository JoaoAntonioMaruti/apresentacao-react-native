import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const styles = {backgroundColor: 'red', padding: 20};

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
