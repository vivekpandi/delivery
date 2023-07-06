import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors, commonColors} from '../../../component/Styles/styleSheet';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import See_All_Component from '../../../screens/home_screen/seeAll';

const IMAGE = [{food_Image: require('../../../assets/Home_Screen/burger.png')}];

const BestSellersComponent = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderBestSeller = ({item}) => (
    <TouchableOpacity>
      <View style={styles.backgroundFirstView}>
        <View style={styles.backgroundSecondView}>
          <Image source={item.food_Image} style={styles.foodImageStyle} />
          <Image source={item.food_Image} style={styles.foodImageStyle} />
        </View>
        <View style={styles.backgroundThirdView}>
          <Image source={item.food_Image} style={styles.foodImageStyle} />
          <Image source={item.food_Image} style={styles.foodImageStyle} />
        </View>
      </View>
    </TouchableOpacity>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.flatListStyles}>
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
        <FlatList data={IMAGE} renderItem={RenderBestSeller} horizontal />
      </View>
    </ScrollView>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const BestSellerText = () => (
    <View>
      <TextView variant={'h3'} color={colors.black} style={styles.sellerStyle}>
        Best Sellers
      </TextView>
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const ProductComponent = () => (
    <View>
      <View style={styles.productsStyles}>
        <TextView
          variant={'l3'}
          color={colors.black}
          style={styles.diaryTextStyle}>
          Diary Products
        </TextView>
        <TextView
          variant={'l3'}
          color={colors.black}
          style={styles.vegetableTextStyle}>
          Vegetables
        </TextView>
      </View>
      <View style={styles.seeAllStyles}>
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <View style={styles.seeAllButtonStyles}>
            <TextView variant={'sh4'} color={colors.green}>
              See all
            </TextView>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnPressMask={false}
          closeOnDragDown={true}
          height={hp(85)}>
          <See_All_Component />
        </RBSheet>
        <TouchableOpacity onPress={onSeeAllPressed}>
          <View style={styles.seeAllButtonStyles}>
            <TextView variant={'sh4'} color={colors.green}>
              See all
            </TextView>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const onSeeAllPressed = () => {
    navigation.navigate('HomeBestSellerComponent');
  };

  return (
    <View>
      <BestSellerText />
      <HorizontalFlatList />
      <ProductComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  sellerStyle: {
    marginHorizontal: wp(6),
    marginTop: hp(2),
  },
  backgroundFirstView: {
    width: wp(40),
    height: hp(20),
    borderRadius: wp(6),
    marginLeft: wp(8),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backgroundSecondView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backgroundThirdView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp(1.5),
  },
  foodImageStyle: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(2),
  },
  flatListStyles: {
    flexDirection: 'row',
  },
  productsStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  diaryTextStyle: {
    marginLeft: wp(-5),
  },
  seeAllStyles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  seeAllButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.primaryBorderColor,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    width: wp(26),
    height: hp(6),
  },
});

export default BestSellersComponent;
