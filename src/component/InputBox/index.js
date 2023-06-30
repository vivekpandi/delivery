import {React, useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Fonts, FontSizes} from '../../resources/fonts';
import {hp, wp} from '../../resources/dimensions';
import PropTypes from 'prop-types';

export const InputBox = ({
  type,
  hint,
  value,
  isPassword,
  style,
  defaultValue,
  isError,
  errorMessage,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  /**
   * keyboard type will be
   *default
   *number-pad
   *decimal-pad
   *numeric
   *email-address
   *phone-pad
   *url
   */

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          style,
          {borderColor: isError ? 'red' : '#DDE1EC'},
        ]}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder={hint}
        placeholderTextColor="#65656B"
        keyboardType={type}
        secureTextEntry={isPassword}
        onSubmitEditing={() => value(inputValue)}
        onBlur={() => value(inputValue)}
        {...props}
      />
      {isError && <Text style={styles.errorTextStyle}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: hp(8),
    margin: '2%',
    borderWidth: 1,
    borderRadius: 13,
    // fontFamily: Fonts.Hellix.Medium,
    fontSize: FontSizes.h6,
    paddingHorizontal: wp(5),
    marginHorizontal: wp(6),
  },
  errorTextStyle: {
    marginStart: '8%',
    color: 'red',
  },
});

InputBox.propTypes = {
  type: PropTypes.string,
  hint: PropTypes.string,
  value: PropTypes.func,
  isPassword: PropTypes.bool,
  style: PropTypes.object,
  defaultValue: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

InputBox.defaultProps = {
  type: 'default',
  hint: '',
  isPassword: false,
  style: {},
  defaultValue: '',
  isError: false,
  errorMessage: '',
};
