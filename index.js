/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AuthNavigation from './src/navigation/auth-navigation';
// import AuthNavigation
const App = () => <AuthNavigation />;

AppRegistry.registerComponent(appName, () => App);
