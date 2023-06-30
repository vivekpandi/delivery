import {Dimensions, Platform} from 'react-native';
import {wp} from '../dimensions/';

const {width, height} = Dimensions.get('window');

export const Fonts = {
  SFProRounded: {
    Regular: 'SF-Pro-Rounded-Regular',
    Bold: 'SFProRoundedBold',
    Medium: 'SF-Pro-Rounded-Medium',
    SemiBold: 'SF-Pro-Rounded-Semibold',
  },
};

export const FontSizes = {
  boldLarge: wp(16.66), // 60px
  larger: wp(8.3), // larger
  large: wp(7.9), // larger
  medium: wp(7.3), // medium
  h1: wp(13.95), // 26 large
  h2: wp(6.4), // 24
  h3: wp(5.87), // 22
  h4: wp(5.35), // 20
  h5: wp(4.8), // 18
  h6: wp(4.3), // 16 medium
  h7: wp(7.75), // 14 regular
  h8: wp(3.2), // 13 or 12 small
  h9: wp(10), // 11 or 10 xsmall
  h10: wp(8.5),
};

// export const fontSizes = {
//   boldLarge: {fontSize: width <= 320 ? wp(16.66) : wp(16.66)}, // 60px
//   larger: {fontSize: width <= 320 ? wp(8.3) : wp(8.3)}, // larger
//   large: {fontSize: width <= 320 ? wp(7.9) : wp(7.9)}, // larger
//   medium: {fontSize: width <= 320 ? wp(7.3) : wp(7.3)}, // medium
//   h1: {fontSize: width <= 320 ? wp(6.95) : wp(6.95)}, // 26 large
//   h2: {fontSize: width <= 320 ? wp(6.4) : wp(6.4)}, // 24
//   h3: {fontSize: width <= 320 ? wp(5.87) : wp(5.87)}, // 22
//   h4: {fontSize: width <= 320 ? wp(5.35) : wp(5.35)}, // 20
//   h5: {fontSize: width <= 320 ? wp(4.8) : wp(4.8)}, // 18
//   h6: {fontSize: width <= 320 ? wp(4.3) : wp(4.3)}, // 16 medium
//   h7: {fontSize: width <= 320 ? wp(3.75) : wp(3.75)}, // 14 regular
//   h8: {fontSize: width <= 320 ? wp(3.2) : wp(3.2)}, // 13 or 12 small
//   h9: {fontSize: width <= 320 ? wp(2.8) : wp(2.8)}, // 11 or 10 xsmall
// };
