import { CompositeScreenProps } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtonPrimary } from '$ui';
import { Text, View } from '~/components/Themed';
import { RootStackParamList } from '~/navigation/types';


export type StackParamList2 = {
  Screen21: undefined;
  Screen22: undefined;
  Screen23: undefined;
};

type StackScreenProps<Screen extends keyof StackParamList2> = CompositeScreenProps<
  NativeStackScreenProps<StackParamList2, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

function Screen21({ navigation, route }: StackScreenProps<'Screen21'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen11' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen12' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen13' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen22')}
      >
        to 2 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen23')}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen22({ navigation, route }: StackScreenProps<'Screen22'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen11' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen12' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen13' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen21')}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen23')}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen23({ navigation, route }: StackScreenProps<'Screen23'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen11' })}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen12' })}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack1', { screen: 'Screen13' })}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen21')}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen22')}
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
      <Stack.Screen name="Screen21" component={Screen21} />
      <Stack.Screen name="Screen22" component={Screen22} />
      <Stack.Screen name="Screen23" component={Screen23} />
    </Stack.Navigator>
  );
}
