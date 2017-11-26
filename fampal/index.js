import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginPage from './app/components/LoginPage';
import ContentPage from './app/components/ContentPage';
import SignupPage from './app/components/SignupPage';

const Navigation = StackNavigator({
    Login: {screen: LoginPage},
    Content: {screen: ContentPage},
    Signup: {screen: SignupPage},
});
AppRegistry.registerComponent('fampal', () => Navigation);
