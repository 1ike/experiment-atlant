/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import BottomTabButton, { buttonDimensions } from './BottomTabButton';
import UnderTabBarButtonSVG from './UnderTabBarButtonSVG';


const borderTopColor = '#eee';
const backgroundColor = 'white';
const borderTopWidth = 2;


export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;

        if (route.name === 'Button') {
          return (
            <View style={styles.tabLayout} key={route.key}>
              <BottomTabButton style={styles.button} />
              <View style={styles.underButton}>
                <View style={[styles.tabLayout, styles.tabPaint]} />
                <UnderTabBarButtonSVG
                  backgroundColor={backgroundColor}
                  borderTopColor={borderTopColor}
                  borderTopWidth={borderTopWidth}
                />
                <View style={[styles.tabLayout, styles.tabPaint]} />
              </View>
              <View style={styles.underButtonFooter} />
            </View>
          );
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params
            // inside the tab screen are preserved
            navigation.navigate({ key: route.key, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };


        const tabBarIcon = options?.tabBarIcon;
        const color = isFocused ? '#222' : '#aaa';

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabLayout, styles.tabPaint]}
            key={route.key}
          >
            {tabBarIcon && tabBarIcon({ color, focused: isFocused, size: 10 })}
            <Text style={{ color }}>
              {String(label)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  tabLayout: {
    flex: 1,
    alignItems: 'center',
  },
  tabPaint: {
    backgroundColor,
    borderTopColor,
    borderTopWidth,
  },
  button: {
    position: 'absolute',
    top: -buttonDimensions / 2,
  },
  underButton: {
    flexDirection: 'row',
  },
  underButtonFooter: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor,
  },
});
