import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import {TextView} from '../../component/TextView/index';
import Images from '../../resources/images';
import {InputBox} from '../../component/InputBox/index';
import {LocalImageView} from '../../component/Image/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';
import HorizontalFlatListComponent from '../../component/ScreenComponents/HorizontalFlatListComponent';
import HorizontalFoodItemsComponent from '../../component/ScreenComponents/HorizontalFoodItemComponents';

const Category_Page = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const ImageComponent = () => (
    <View style={styles.headerStyle}>
      <View>
        <TouchableOpacity>
          <LocalImageView
            style={styles.topImageStyle}
            imagePath={Images.categoryvector}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundViewStyle}>
        <TouchableOpacity>
          <ImageBackground
            source={Images.Elipse}
            style={styles.elipseImgaAgeStyle}>
            <Image
              source={Images.imagevector}
              style={styles.imageVectorStyle}
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const SearchComponent = () => (
    <View style={styles.SectionStyle}>
      <Image source={Images.searchVector} style={styles.ImageStyle} />
      <TextInput
        style={styles.searchTextInputStyle}
        placeholder="Search"
        placeholderTextColor={'#65656B'}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.parrentContainer}>
        <ImageComponent />
        <SearchComponent />
        <HorizontalFlatListComponent />
        <HorizontalFoodItemsComponent />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.orange,
    height: hp(100),
  },
  topImageStyle: {
    width: wp(8),
    height: hp(4),
    marginTop: hp(2),
  },
  headerStyle: {
    flexDirection: 'row',
    marginLeft: wp(6),
    justifyContent: 'space-between',
    marginTop: hp(6),
  },
  backgroundViewStyle: {
    justifyContent: 'center',
    marginRight: wp(6),
  },
  elipseImgaAgeStyle: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    alignSelf: 'center',
  },
  imageVectorStyle: {
    alignSelf: 'center',
    width: wp(6.5),
    height: hp(3),
    marginTop: hp(1),
  },
  SectionStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(5),
    width: wp(83),
    borderRadius: wp(6),
    marginTop: hp(3),
    marginLeft: wp(2),
    backgroundColor: colors.white,
  },
  searchTextInputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 14,
    marginLeft: hp(1),
  },
  ImageStyle: {
    height: hp(3),
    width: hp(3),
    borderRadius: hp(1.5),
    marginLeft: hp(2),
    alignItems: 'center',
  },
});
export default Category_Page;
