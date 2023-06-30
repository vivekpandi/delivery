import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../resources/dimensions';
import Images from '../../resources/images';
import {TextView} from '../../component/TextView/index';
import {InputBox} from '../../component/InputBox/index';
import {colors, commonColors} from '../../component/Styles/styleSheet';

const Update_Profile = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  // eslint-disable-next-line react/no-unstable-nested-components
  const ProfileComponent = () => (
    <View style={styles.profileViewStyle}>
      <TextView
        variant={'h5'}
        color={colors.lightColor}
        style={styles.profileTextStyle}>
        Profile
      </TextView>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const NameComponent = () => (
    <View style={styles.SectionStyle}>
      <TextView
        variant={'h5'}
        color={colors.white}
        style={styles.nameTextStyle}>
        Name
      </TextView>
      <InputBox style={styles.emailStyle} hint="Name" type="email-address" />
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const EmailComponent = () => (
    <View>
      <TextView
        variant={'h5'}
        color={colors.white}
        style={styles.profileTextStyle}>
        Email
      </TextView>
      <InputBox
        style={styles.emailStyle}
        hint="Email"
        type="email-address"
        value={setEmail}
      />
    </View>
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const AddressComponent = () => (
    <View style={styles.SectionStyle}>
      <TextView
        variant={'h5'}
        color={colors.white}
        style={styles.nameTextStyle}>
        Address
      </TextView>
      <InputBox
        style={styles.addressStyle}
        hint="Address"
        type="email-address"
      />
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const LocationComponent = () => (
    <View style={styles.textViewStyles}>
      <TextView
        variant={'h6'}
        color={colors.orange}
        style={styles.locationTextStyle}>
        use my location
      </TextView>
    </View>
  );

  // eslint-disable-next-line react/no-unstable-nested-components
  const SubmitComponent = () => (
    <TouchableOpacity onPress={onSubmitPressed}>
      <View style={styles.submitButtonStyles}>
        <TextView variant={'sh4'} color={colors.orange}>
          submit
        </TextView>
      </View>
    </TouchableOpacity>
  );
  const onSubmitPressed = () => {
    navigation.navigate('Home_Screen');
  };

  return (
    <SafeAreaView style={styles.parrentContainer}>
      <ScrollView>
        <ProfileComponent />
        <NameComponent />
        <EmailComponent />
        <AddressComponent />
        <LocationComponent />
        <SubmitComponent />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  parrentContainer: {
    backgroundColor: colors.orange,
    height: hp(100),
  },
  profileViewStyle: {
    backgroundColor: colors.white,
    height: hp(6),
    justifyContent: 'center',
  },
  nameTextStyle: {
    marginHorizontal: wp(6),
    marginTop: hp(4),
  },
  profileTextStyle: {
    marginHorizontal: wp(6),
  },
  emailStyle: {
    backgroundColor: colors.white,
  },
  addressStyle: {
    height: hp(28),
    backgroundColor: colors.white,
    marginTop: hp(2),
  },
  textViewStyles: {
    alignSelf: 'flex-end',
    marginRight: wp(8),
    marginTop: hp(4),
    width: wp(45),
    height: hp(4),
    backgroundColor: colors.white,
    borderRadius: wp(5),
  },
  locationTextStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  submitButtonStyles: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    color: colors.orange,
    borderRadius: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(10),
    width: wp(76),
    height: hp(8),
  },
});

export default Update_Profile;
