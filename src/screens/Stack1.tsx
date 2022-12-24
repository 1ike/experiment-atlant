import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { ButtonPrimary } from '$ui';
import { Text, View } from '~/components/Themed';
import { RootStackParamList, RootTabScreenProps } from '~/navigation/types';


export type StackParamList1 = {
  Screen11: undefined;
  Screen12: undefined;
  Screen13: undefined;
};

type StackScreenProps<Screen extends keyof StackParamList1> = CompositeScreenProps<
  NativeStackScreenProps<StackParamList1, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

function Screen11({ navigation, route }: StackScreenProps<'Screen11'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Screen12')}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen13')}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen21' })}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen22' })}
      >
        to 2 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen23' })}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen12({ navigation, route }: StackScreenProps<'Screen12'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Screen11')}
      >
        to 1 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen13')}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen21' })}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen22' })}
      >
        to 2 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen23' })}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}

function Screen13({ navigation, route }: StackScreenProps<'Screen13'>) {
  return (
    <View>
      <Text>{route.name}</Text>

      <ButtonPrimary
        onPress={() => navigation.navigate('Screen12')}
      >
        to 1 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Screen13')}
      >
        to 1 3
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen21' })}
      >
        to 2 1
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen22' })}
      >
        to 2 2
      </ButtonPrimary>
      <ButtonPrimary
        onPress={() => navigation.navigate('Stack2', { screen: 'Screen23' })}
      >
        to 2 3
      </ButtonPrimary>
    </View>
  );
}


const Stack = createNativeStackNavigator<StackParamList1>();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen11" component={Screen11} />
      <Stack.Screen name="Screen12" component={Screen12} />
      <Stack.Screen name="Screen13" component={Screen13} />
    </Stack.Navigator>
  );
}
