import React, {useState} from 'react';
import {TextInput} from 'react-native';

const InputBox = ({styles, onValueChange, hint}) => {
  const [textValue, setTextValue] = useState('');
  return (
    <TextInput
      style={styles}
      onChangeText={text => setTextValue(text)}
      onBlur={() => onValueChange(textValue)}
      placeholder={hint}
      placeholderTextColor={'#030090'}
    />
  );
};

export default React.memo(InputBox);
