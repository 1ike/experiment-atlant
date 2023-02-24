import {
  StyleProp, StyleSheet, TouchableOpacity, ViewStyle,
} from 'react-native';


import { Text } from '../Themed';

export default function BottomTabButton({ style }: { style?: StyleProp<ViewStyle> }) {
  return (
    <TouchableOpacity
      onPress={(e) => e.preventDefault()}
      style={[styles.button, style]}
    >
      <Text style={styles.content}>+</Text>
    </TouchableOpacity>
  );
}

export const buttonDimensions = 60;

/* eslint-disable react-native/no-color-literals */
const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonDimensions,
    height: buttonDimensions,
    borderRadius: buttonDimensions / 2,
    backgroundColor: '#333',
  },
  content: {
    fontSize: 25,
    color: 'white',
  },
});
