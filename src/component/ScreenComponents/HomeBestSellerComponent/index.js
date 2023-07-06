import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import Images from '../../../resources/images';
import {colors, commonColors} from '../../../component/Styles/styleSheet';
import {useNavigation} from '@react-navigation/native';
import {LocalImageView} from '../../../component/Image/index';

const IMAGE = [
  {
    diary_Product: require('../../../assets/Home_Screen/milk.png'),
    title: 'Mango',
    amount: '$20',
    grams: '1/2liter',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/onnion.png'),
    title: 'Orange',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/Tomato.png'),
    title: 'Tomato',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/health2.png'),
    title: 'Kiwi',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/health2.png'),
    title: 'cucumber',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/Tomato.png'),
    title: 'Apple',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/health2.png'),
    title: 'Kiwi',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/carrots.png'),
    title: 'cucumber',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/coriander.png'),
    title: 'cucumber',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/greenchilli.png'),
    title: 'Apple',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/health2.png'),
    title: 'Kiwi',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/coriander.png'),
    title: 'cucumber',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/greenchilli.png'),
    title: 'Apple',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
  {
    diary_Product: require('../../../assets/Home_Screen/health2.png'),
    title: 'Kiwi',
    amount: '$20',
    grams: '200g',
    click: 'Add',
  },
];

const HomeBestSellerComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const HeaderComponent = () => (
    <View style={styles.headerParrentStyle}>
      <TouchableOpacity>
        <LocalImageView style={styles.ImageStyle} imagePath={Images.BackIcon} />
      </TouchableOpacity>
      <TextView
        variant={'sh4'}
        style={styles.bestSellerText}
        color={colors.black}>
        BestSellers
      </TextView>
      {/* <View style={styles.childBacgroundStyle}> */}
      <TouchableOpacity>
        <LocalImageView
          style={styles.searchVectorStyle}
          imagePath={Images.searchVector}
        />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderShopCategory = ({item}) => (
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity>
        <View style={styles.backgroundView}>
          <View style={styles.offerStyles}>
            <TextView
              variant={'h8'}
              color={colors.white}
              styles={{alignItems: 'center', alignSelf: 'center'}}>
              25%
            </TextView>
          </View>
          <Image source={item.diary_Product} style={styles.foodImageStyle} />

          <TextView variant={'sh6'} style={styles.diaryText}>
            {item.title}
          </TextView>
          <TextView variant={'sh6'} style={styles.gramsText}>
            {item.grams}
          </TextView>
          <View style={styles.subView}>
            <TextView variant={'sh6'} style={styles.diaryText2}>
              {item.amount}
            </TextView>
            <TouchableOpacity style={styles.addButton}>
              <TextView
                variant={'h6'}
                color={colors.green}
                style={styles.diaryText1}>
                {item.click}
              </TextView>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: wp(5)}}>
        <HeaderComponent />
        <FlatList
          data={IMAGE}
          renderItem={RenderShopCategory}
          numColumns={2}
          style={styles.imageViewStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerParrentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  bestSellerText: {},

  imageViewStyle: {
    backgroundColor: colors.white,
    marginTop: hp(2),
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp(3),
  },
  addButton: {
    borderWidth: wp(0.5),
    alignSelf: 'center',
    borderColor: colors.green,
    height: hp(5),
    width: wp(13),
    borderRadius: wp(2),
  },
  backgroundView: {
    width: wp(42),
    height: hp(35),
    borderRadius: wp(6),
    marginHorizontal: wp(4),
    backgroundColor: colors.primaryBorderColor,
    marginTop: hp(2),
  },
  shopCategoryStyle: {
    marginTop: hp(4),
    marginHorizontal: wp(6),
  },
  foodImageStyle: {
    alignSelf: 'center',
    width: wp(30),
    height: wp(30),
    borderRadius: wp(3),
    marginTop: hp(3),
    resizeMode: 'contain',
  },
  diaryText: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  gramsText: {
    marginLeft: wp(3),
    marginTop: hp(-1),
  },
  diaryText2: {
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  diaryText1: {
    alignSelf: 'center',
  },
  ImageStyle: {
    height: hp(3),
    width: hp(3),
    marginLeft: hp(2),
    alignItems: 'center',
  },
  searchVectorStyle: {
    height: hp(3),
    width: hp(3),
    marginRight: wp(3),
    justifyContent: 'center',
  },
  offerStyles: {
    width: wp(8),
    height: hp(4),
    marginLeft: wp(4),
    backgroundColor: colors.blue,
    alignItems: 'center',
  },
});

export default HomeBestSellerComponent;
