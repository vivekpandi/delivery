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
          color={colors.white}>
          DELIVARY IN
        </TextView>
        <TextView variant={'h3'} style={styles.timeText} color={colors.white}>
          12 Minutes
        </TextView>
        <TextView
          variant={'h6'}
          style={styles.locationText}
          color={colors.white}>
          Home - Chennai .
        </TextView>
      </View>
      <View style={styles.backgroundViewStyle}>
        <TouchableOpacity onPress={onProfilePressed}>
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
    backgroundColor: colors.orange,
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
    width: wp(13),
    height: wp(13),
    borderRadius: wp(7),
    alignSelf: 'center',
  },
  imageVectorStyle: {
    alignSelf: 'center',
    width: wp(6.5),
    height: hp(3),
    marginTop: hp(1),
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
    height: hp(5),
    width: wp(83),
    borderRadius: wp(6),
    marginTop: hp(3),
    marginLeft: wp(2),
    backgroundColor: colors.white,
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
