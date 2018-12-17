import { createStackNavigator } from 'react-navigation';
import { HomeScreen }  from '../screen/HomeScreen';
import {PresentationScreen} from '../screen/PresentationScreen';


export const RootStack = createStackNavigator({
    Home: HomeScreen,
    Presentation: PresentationScreen
    
  },
  {
    initialRouteName:'Home',
  }
  
  );