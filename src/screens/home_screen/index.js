import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';
import BestSellersComponent from '../../component/ScreenComponents/BestSellerComponents';
import ShopCategoryComponent from '../../component/ScreenComponents/ShopCategoryComponent';
import ShopStoreComponent from '../../component/ScreenComponents/ShopStoreComponent';

const Home_Screen = () => {
  const navigation = useNavigation();
  // eslint-disable-next-line react/no-unstable-nested-components
  const HeaderComponent = () => (
    <View style={styles.headerStyle}>
      <View style={styles.textStyle}>
        <TextView
          variant={'h6'}
          style={styles.deliveryText}
          color={colors.black}>
          DELIVARY IN
        </TextView>
        <TextView variant={'h3'} style={styles.timeText} color={colors.black}>
          12 Minutes
        </TextView>
        <TextView
          variant={'h6'}
          style={styles.locationText}
          color={colors.GREYS}>
          Home - Chennai .
        </TextView>
      </View>
      <View style={styles.backgroundViewStyle}>
        <TouchableOpacity onPress={onProfilePressed}>
          <View style={styles.elipseImgaAgeStyle}>
            <Image
              source={Images.imagevector}
              style={styles.imageVectorStyle}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const onProfilePressed = () => {
    navigation.navigate('My_Account');
  };

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
    <SafeAreaView style={styles.parrentContainer}>
      <ScrollView>
        <HeaderComponent />
        <SearchComponent />
        <BestSellersComponent />
        <ShopCategoryComponent />
        <ShopStoreComponent />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.white,
    height: hp(100),
    paddingBottom: hp(4),
  },
  headerStyle: {
    flexDirection: 'row',
    marginLeft: wp(6),
    justifyContent: 'space-between',
  },
  deliveryText: {
    marginTop: hp(1),
  },
  timeText: {
    marginTop: hp(-1),
  },
  locationText: {
    marginTop: hp(-1),
  },
  backgroundViewStyle: {
    justifyContent: 'center',
    marginRight: wp(6),
  },

  elipseImgaAgeStyle: {
    width: wp(16),
    height: wp(16),
    borderRadius: wp(8),
    alignSelf: 'center',
    borderColor: colors.black,
    borderWidth: wp(1.5),
  },
  imageVectorStyle: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    marginTop: hp(1),
    alignSelf: 'center',
    tintColor: colors.black,
  },
  searchTextInputStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 14,
    marginLeft: hp(1),
  },
  SectionStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(7),
    width: wp(83),
    borderRadius: wp(2),
    marginTop: hp(3),
    marginLeft: wp(2),
    backgroundColor: colors.primaryBorderColor,
  },

  ImageStyle: {
    height: hp(3),
    width: hp(3),
    borderRadius: hp(1.5),
    marginLeft: hp(2),
    alignItems: 'center',
  },
});

export default Home_Screen;
