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
const DATA = [
  {
    health_Drinks: require('../../../assets/Home_Screen/health1.png'),
  },
];

const TEXT = [
  {
    name1: 'Book Table',
    name2: 'Nearest',
    name3: 'Rating 4+',
    name4: 'Filter',
  },
];

const HorizontalFlatListComponent = () => {
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
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderText = ({item}) => (
    <View style={styles.textParrentView}>
      <View style={styles.textBackgroundView}>
        <Text style={styles.flatListTextStyle}>{item.name1}</Text>
      </View>
      <View style={styles.textBackgroundView}>
        <Text style={styles.flatListTextStyle}>{item.name2}</Text>
      </View>
      <View style={styles.textBackgroundView}>
        <Text style={styles.flatListTextStyle}>{item.name3}</Text>
      </View>
      <View style={styles.textBackgroundView}>
        <Text style={styles.flatListTextStyle}>{item.name4}</Text>
      </View>
    </View>
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

  // eslint-disable-next-line react/no-unstable-nested-components
  const TextFlatList = () => (
    <ScrollView horizontal>
      <View style={styles.textFlatListStyles}>
        <FlatList data={TEXT} renderItem={RenderText} horizontal />
      </View>
    </ScrollView>
  );

  return (
    <View>
      <HorizontalHealthDrinksFlatList />
      <TextFlatList />
    </View>
  );
};
const styles = StyleSheet.create({
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

  healthDrinkFlatListStyles: {
    marginTop: hp(2),
    flexDirection: 'row',
  },
  textParrentView: {
    flexDirection: 'row',
  },
  textBackgroundView: {
    width: wp(24),
    height: hp(5),
    borderRadius: wp(2),
    marginLeft: wp(6),
    marginTop: hp(2),
    backgroundColor: colors.primaryBorderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFlatListStyles: {
    marginTop: hp(2),
    flexDirection: 'row',
  },
});
export default HorizontalFlatListComponent;
