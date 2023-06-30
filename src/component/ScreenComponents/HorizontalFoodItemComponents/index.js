import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {colors, commonColors} from '../../../component/Styles/styleSheet';
import {LocalImageView} from '../../../component/Image/index';
import Images from '../../../resources/images';
// import {Carousel} from 'react-native-snap-carousel';
// import {Carousel} from 'react-native-auto-carousel';

const DATA = [
  {
    image1: require('../../../assets/Home_Screen/health1.png'),
    item_name1: 'health drinks',
    // health_Drinks2: require('../../../assets/Home_Screen/health1.png'),
    // item_name2: 'health drinks',
    // health_Drinks3: require('../../../assets/Home_Screen/health1.png'),
    // item_name3: 'health drinks',
    // health_Drinks4: require('../../../assets/Home_Screen/health1.png'),
    // item_name4: 'health drinks',
    // health_Drinks5: require('../../../assets/Home_Screen/health1.png'),
    // item_name5: 'health drinks',
    // health_Drinks6: require('../../../assets/Home_Screen/health1.png'),
    // item_name6: 'health drinks',
  },
  {
    image2: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
  {
    image3: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
  {
    image4: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
  {
    image5: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
  {
    image6: require('../../../assets/Home_Screen/health1.png'),
    item_name: 'health drinks',
  },
];

const HorizontalFoodItemsComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderFoodItemCategory = ({item}) => (
    <View>
      <TouchableOpacity>
        <View style={styles.foodItemBackgroundView}>
          <Image
            source={require('../../../assets/Home_Screen/health1.png')}
            style={styles.foodItemImageStyle}
          />
        </View>
      </TouchableOpacity>
      {/* <Text style={styles.foodItemText}>{item.item_name}</Text> */}
    </View>
  );

  // const RenderFoodItemCategory = ({item}) => {
  //   <View>
  //     <View>
  //       <LocalImageView
  //         style={styles.foodItemImageStyle}
  //         imagePath={item.healthDrinks1}
  //       />
  //     </View>
  //     <View></View>
  //   </View>;
  // };

  // eslint-disable-next-line react/no-unstable-nested-components
  const HorizontalFoodItemFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.foodItemFlatListStyles}>
        <FlatList
          data={DATA}
          numColumns={3}
          renderItem={RenderFoodItemCategory}
          // horizontal
        />
        {/* <FlatList data={DATA} renderItem={RenderFoodItemCategory} horizontal />
        <FlatList data={DATA} renderItem={RenderFoodItemCategory} horizontal />
        <FlatList data={DATA} renderItem={RenderFoodItemCategory} horizontal />
        <FlatList data={DATA} renderItem={RenderFoodItemCategory} horizontal />
        <FlatList data={DATA} renderItem={RenderFoodItemCategory} horizontal /> */}

        {/* <Carousel data={DATA} renderItem={RenderFoodItemCategory}></Carousel> */}

        {/* <Carousel
          data={DATA}
          // numColumns={3}
          renderItem={RenderFoodItemCategory}
        /> */}
      </View>
    </ScrollView>
  );

  return (
    <View>
      <HorizontalFoodItemFlatList />
    </View>
  );
};
const styles = StyleSheet.create({
  foodItemBackgroundView: {
    width: wp(26),
    height: hp(15),
    borderRadius: wp(6),
    marginLeft: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  foodItemImageStyle: {
    alignSelf: 'center',
    width: wp(22),
    height: wp(22),
    borderRadius: wp(3),
    backgroundColor: 'Yellow',
  },
  foodItemText: {
    alignSelf: 'center',
    marginLeft: wp(6),
    fontSize: 16,
    color: colors.white,
    marginTop: hp(2),
  },
  foodItemFlatListStyles: {
    marginTop: hp(2),
    flexDirection: 'row',
  },
});

export default HorizontalFoodItemsComponent;
