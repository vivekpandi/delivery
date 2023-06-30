/* eslint-disable lines-between-class-members */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ThemeManager {
  _props;
  _theme;

  constructor(props) {
    this._props = props;
    this.setTheme(this.getStoredTheme());
  }

  async getStoredTheme() {
    const currentTheme = await AsyncStorage.getItem('theme');
    if (currentTheme) this.setTheme(currentTheme);
    else this.setTheme(this._getDefaultTheme());
  }

  _getDefaultTheme() {
    return Object.keys(this._props)[0];
  }

  setTheme(theme, isTemp, callback) {
    const propsTheme = this._props[theme];
    const defaultTheme = this._getDefaultTheme();
    this._theme = propsTheme ? theme : defaultTheme;
    const colors = this._props[this._theme];
    if (colors) {
      if (!isTemp) {
        AsyncStorage.setItem('theme', this._theme);
      }
      for (const key in colors) {
        if (colors.hasOwnProperty(key)) {
          this[key] = colors[key];
        }
      }
      if (callback) callback();
    }
  }

  getTheme() {
    return this._theme;
  }
}

export default ThemeManager;
