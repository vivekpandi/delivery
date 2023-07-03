import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {LocalImageView} from '../../../component/Image/index';
import Images from '../../../resources/images';
import {colors, commonColors} from '../../../component/Styles/styleSheet';

const IMAGE = [
  {
    diary_Product: require('../../../assets/Home_Screen/diary-product.png'),
    name: 'Diary Products',
  },
];
const PICTURE = [
  {
    bakeries: require('../../../assets/Home_Screen/bakeries.png'),
    product: 'Bakeries',
  },
];

const DATA = [
  {
    health_Drinks: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
];

const ShopCategoryComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderShopCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.backgroundView}>
          <Image source={item.diary_Product} style={styles.foodImageStyle} />
          {/* <Text style={styles.diaryText}>{item.name}</Text> */}
        </View>
      </TouchableOpacity>
      <Text style={styles.diaryText}>Diary Products</Text>
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderBakeriesCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.backeriesBackgroundView}>
          <Image source={item.bakeries} style={styles.backeriesImageStyle} />
        </View>
      </TouchableOpacity>
      <Text style={styles.bakeriesText}>{item.product}</Text>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderHealthDrinkCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.healthDrinksBackgroundView}>
          <Image
            source={item.health_Drinks}
            style={styles.healthDrinksImageStyle}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.healthDrinksText}>{item.item_name}</Text>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.flatListStyles}>
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
        <FlatList data={IMAGE} renderItem={RenderShopCategory} horizontal />
      </View>
    </ScrollView>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalBackeriesFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.backeriesFlatListStyles}>
        <FlatList
          data={PICTURE}
          renderItem={RenderBakeriesCategory}
          horizontal
        />
        <FlatList
          data={PICTURE}
          renderItem={RenderBakeriesCategory}
          horizontal
        />
        <FlatList
          data={PICTURE}
          renderItem={RenderBakeriesCategory}
          horizontal
        />
        <FlatList
          data={PICTURE}
          renderItem={RenderBakeriesCategory}
          horizontal
        />
        <FlatList
          data={PICTURE}
          renderItem={RenderBakeriesCategory}
          horizontal
        />
      </View>
    </ScrollView>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalHealthDrinksFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.healthDrinkFlatListStyles}>
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
        <FlatList
          data={DATA}
          renderItem={RenderHealthDrinkCategory}
          horizontal
        />
      </View>
    </ScrollView>
  );

  // eslint-disable-next-line react/no-unstable-nested-components, no-unused-vars
  const ShopCategoryText = () => (
    <View>
      <TextView
        variant={'h3'}
        color={colors.black}
        style={styles.shopCategoryStyle}>
        Shop by Category
      </TextView>
    </View>
  );
  return (
    <View>
      <ShopCategoryText />
      <HorizontalFlatList />
      <HorizontalBackeriesFlatList />
      <HorizontalHealthDrinksFlatList />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundView: {
    width: wp(26),
    height: hp(15),
    borderRadius: wp(6),
    marginLeft: wp(6),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  shopCategoryStyle: {
    marginTop: hp(4),
    marginHorizontal: wp(6),
  },
  foodImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
  },
  flatListStyles: {
    marginTop: hp(3),
    flexDirection: 'row',
  },
  backeriesBackgroundView: {
    width: wp(26),
    height: hp(15),
    borderRadius: wp(6),
    marginLeft: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  backeriesFlatListStyles: {
    flexDirection: 'row',
  },
  backeriesImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
  },
  diaryText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
  bakeriesText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
  healthDrinksBackgroundView: {
    width: wp(26),
    height: hp(15),
    borderRadius: wp(6),
    marginLeft: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  healthDrinksImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
  },
  healthDrinksText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.black,
    marginTop: hp(2),
  },
  healthDrinkFlatListStyles: {
    marginTop: wp(2),
    flexDirection: 'row',
  },
});

export default ShopCategoryComponent;
