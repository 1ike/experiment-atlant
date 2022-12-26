import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonPrimary } from '$ui';
import { Text, View } from '~/components/Themed';
import { RootStackParamList } from '~/navigation/types';


export type StackParamList2 = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

type StackScreenProps<Screen extends keyof StackParamList2> = CompositeScreenProps<
  NativeStackScreenProps<StackParamList2, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

function Screen1({ navigation, route }: StackScreenProps<'Screen1'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen1' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen2' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen3' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen2')}
      >
        to 2 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen3')}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen2({ navigation, route }: StackScreenProps<'Screen2'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen1' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen2' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen3' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen1')}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen3')}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen3({ navigation, route }: StackScreenProps<'Screen3'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen1' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen2' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen3' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen1')}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen2')}
      >
        to 2 2
      </ButtonPrimary>
    </View>
  );
}


const Stack = createNativeStackNavigator<StackParamList2>();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
}
