import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Make sure to install this library

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='rgba(255, 255, 255, 0.4)'
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Icon name={showPassword ? 'eye' : 'eye-with-line'} size={20} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 48,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color: 'white',
    // Add your other TextInput styles here
  },
  eyeIcon: {
    padding: 10,
  },
};

export default PasswordInput;
