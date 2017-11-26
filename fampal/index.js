import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginPage from './app/components/LoginPage';
import ContentPage from './app/components/ContentPage';

const Navigation = StackNavigator({
    Login: {screen: LoginPage},
    Content: {screen: ContentPage},
});
AppRegistry.registerComponent('fampal', () => Navigation);
