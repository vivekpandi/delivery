/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Fonts, FontSizes} from '../../resources/fonts';

/**
 * Body component for the react native screens
 * which predefined with safe area view
 * header text variant (h1, h2,h3,h4,h5,h6,h7,h8,h9) uses bold
 * sub header text variant (sh1, sh2,sh3,sh4,sh5,sh6,sh7,sh8,sh9) semiBold
 * paragraph text variant (p1,p2,p3,p4,p5,p6,p7,p8,p9) medium
 * light text variant (l1,l2,l3,l4,l5,l6,l7,l8,l9)
 */

export const TextView = ({children, variant, color, style}) => {
  const getTextStyle = () => {
    /**
     * can reduce the line of code using conditional operator will might
     * cause slow in rendering
     * used switch to increase the performance in rendering
     */
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'h4':
        return styles.h4;
      case 'h5':
        return styles.h5;
      case 'h6':
        return styles.h6;
      case 'h7':
        return styles.h7;
      case 'h8':
        return styles.h8;
      case 'h9':
        return styles.h9;
      case 'sh1':
        return styles.sh1;
      case 'sh2':
        return styles.sh2;
      case 'sh3':
        return styles.sh3;
      case 'sh4':
        return styles.sh4;
      case 'sh5':
        return styles.sh5;
      case 'sh6':
        return styles.sh6;
      case 'sh7':
        return styles.sh7;
      case 'sh8':
        return styles.sh8;
      case 'sh9':
        return styles.sh9;
      case 'p1':
        return styles.p1;
      case 'p2':
        return styles.p2;
      case 'p3':
        return styles.p3;
      case 'p4':
        return styles.p4;
      case 'p5':
        return styles.p5;
      case 'p6':
        return styles.p6;
      case 'p7':
        return styles.p7;
      case 'p8':
        return styles.p8;
      case 'p9':
        return styles.p9;
      case 'l1':
        return styles.l1;
      case 'l2':
        return styles.l2;
      case 'l3':
        return styles.l3;
      case 'l4':
        return styles.l4;
      case 'l5':
        return styles.l5;
      case 'l6':
        return styles.l6;
      case 'l7':
        return styles.l7;
      case 'l8':
        return styles.l8;
      case 'l9':
        return styles.l9;
    }
  };

  const textStyle = getTextStyle();

  return <Text style={[textStyle, style, {color: color}]}>{children}</Text>;
};

const styles = {
  h1: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h1,
  },
  h2: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h2,
  },
  h3: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h3,
  },
  h4: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h4,
  },
  h5: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h5,
  },
  h6: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h6,
  },
  h7: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h7,
  },
  h8: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h8,
  },
  h9: {
    fontFamily: Fonts.SFProRounded.Bold,
    fontSize: FontSizes.h9,
  },
  sh1: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h1,
  },
  sh2: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h2,
  },
  sh3: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h3,
  },
  sh4: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h4,
  },
  sh5: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h5,
  },
  sh6: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h6,
  },
  sh7: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h7,
  },
  sh8: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h8,
  },
  sh9: {
    fontFamily: Fonts.SFProRounded.SemiBold,
    fontSize: FontSizes.h9,
  },
  p1: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h1,
  },
  p2: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h2,
  },
  p3: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h3,
  },
  p4: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h4,
  },
  p5: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h5,
  },
  p6: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h6,
  },
  p7: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h7,
  },
  p8: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h8,
  },
  p9: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h9,
  },
  p10: {
    fontFamily: Fonts.SFProRounded.Medium,
    fontSize: FontSizes.h10,
  },
  l1: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h1,
  },
  l2: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h2,
  },
  l3: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h3,
  },
  l4: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h4,
  },
  l5: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h5,
  },
  l6: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h6,
  },
  l7: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h7,
  },
  l8: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h8,
  },
  l9: {
    fontFamily: Fonts.SFProRounded.Regular,
    fontSize: FontSizes.h9,
  },
};
