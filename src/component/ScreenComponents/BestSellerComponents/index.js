import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors, commonColors} from '../../../component/Styles/styleSheet';

const IMAGE = [{food_Image: require('../../../assets/Home_Screen/burger.png')}];

const BestSellersComponent = () => {
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
      <TextView variant={'h3'} color={colors.white} style={styles.sellerStyle}>
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
          color={colors.white}
          style={styles.diaryTextStyle}>
          Diary Products
        </TextView>
        <TextView
          variant={'l3'}
          color={colors.white}
          style={styles.vegetableTextStyle}>
          Vegetables
        </TextView>
      </View>
      <View style={styles.seeAllStyles}>
        <TouchableOpacity>
          <View style={styles.seeAllButtonStyles}>
            <TextView variant={'sh4'} color={colors.orange}>
              See all
            </TextView>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.seeAllButtonStyles}>
            <TextView variant={'sh4'} color={colors.orange}>
              See all
            </TextView>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    backgroundColor: colors.white,
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    width: wp(26),
    height: hp(6),
  },
});

export default BestSellersComponent;
