import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SectionList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextView} from '../../../component/TextView/index';
import {hp, wp} from '../../../resources/dimensions';
import {LocalImageView} from '../../../component/Image/index';
import Images from '../../../resources/images';
import {colors, commonColors} from '../../../component/Styles/styleSheet';

const DATA = [
  {
    title: '',
    data: [
      {title: 'Your Orders', image: Images.Shop_Icon, navigation: 'HelpScreen'},
      {
        title: 'Address Book',
        image: Images.Order_Icon,
        navigation: 'HelpScreen',
      },
    ],
  },
  {
    title: 'My Account',
    data: [
      {
        title: 'Share the App',
        image: Images.Location,
        navigation: 'ManageAddress',
      },
      {
        title: 'About us',
        image: Images.Favorite,
        navigation: 'HelpScreen',
      },
      {
        title: 'Rate us on the playstore',
        image: Images.Setting_icon,
        navigation: 'Settings',
      },
    ],
  },
];

const MyAccountScreenComponent = () => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const WalletComponent = () => (
    <View style={styles.parrentViewStyle}>
      <View style={styles.imageViewStyle}>
        <LocalImageView
          style={styles.walletImageStyle}
          imagePath={Images.Wallet}
        />
        <LocalImageView
          style={styles.supportImageStyle}
          imagePath={Images.Support}
        />
        <LocalImageView
          style={styles.paymentsImageStyle}
          imagePath={Images.Payments}
        />
      </View>
      <View style={styles.textViewStyle}>
        <TextView variant={'l8'} color={colors.black}>
          Wallet
        </TextView>
        <TextView variant={'l8'} color={colors.black}>
          Support
        </TextView>
        <TextView variant={'l8'} color={colors.black}>
          Payment
        </TextView>
      </View>
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const YourInformationComponent = () => (
    <View>
      <TextView
        variant={'sh5'}
        style={styles.informationTextStyle}
        color={colors.black}>
        Your Information
      </TextView>
    </View>
  );

  const renderInformationItems = ({item, index}) => (
    <TouchableOpacity style={styles.menuContainer}>
      <View style={styles.renderInformationStyle}>
        <Image source={item.image} style={styles.menuIcon} />
        <TextView variant={'p5'} color={'#424244'} style={styles.menuText}>
          {item.title}
        </TextView>
      </View>
      <View>
        <Image source={Images.Arrow} style={styles.menuLeftArrow} />
      </View>
    </TouchableOpacity>
  );
  const renderInformationHeader = ({section: {title}}) => (
    <View style={{marginTop: hp(1), marginLeft: wp(5)}}>
      <TextView variant={'p6'} color={'#65656B'}>
        {title}
      </TextView>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const MenuListComponent = () => (
    <SectionList
      sections={DATA}
      renderItem={renderInformationItems}
      renderSectionHeader={renderInformationHeader}
    />
  );

  return (
    <View>
      <WalletComponent />
      <YourInformationComponent />
      <MenuListComponent />
    </View>
  );
};
const styles = StyleSheet.create({
  parrentViewStyle: {
    backgroundColor: colors.secondaryTextColor,
    marginTop: hp(3),
    width: wp(90),
    marginLeft: wp(5),
    height: hp(8),
    borderRadius: wp(3),
    justifyContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  imageViewStyle: {
    // marginTop: hp(4),
    marginLeft: wp(3),
    marginRight: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  walletImageStyle: {
    width: wp(6),
    height: hp(3),
  },
  supportImageStyle: {
    width: wp(6),
    height: hp(3),
  },
  paymentsImageStyle: {
    width: wp(6),
    height: hp(3),
  },
  textViewStyle: {
    marginLeft: wp(3),
    marginRight: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: wp(4),
  },
  informationTextStyle: {
    marginLeft: wp(5),
  },
  menuContainer: {
    flexDirection: 'row',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: wp(2),
    alignItems: 'center',
    marginHorizontal: wp(4),
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    marginVertical: hp(1),
  },
  renderInformationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MyAccountScreenComponent;