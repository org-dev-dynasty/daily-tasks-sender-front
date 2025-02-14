import theme from '@/themes/theme';
import { useCallback, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Text, View } from "react-native";
import { InputProps } from '@/interfaces/Input/index';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Input = (props: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(props.hide);
    const [themeModeS, setThemeModeS] = useState('dark');

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const Label = <Text style={{color: props.error ? theme.COLORS.NEGATIVE : isFocused ? theme.COLORS.MAIN : themeModeS === 'dark' ? '#ffffff' : '#000000'}}>{props.label}</Text>;

    useFocusEffect(
      useCallback(() => {
          AsyncStorage.getItem('themeMode').then((value) => {
              if (value) {
                  setThemeModeS(value);
              }
          });
      }
  , []));

    return (
        <>
        <View>
            <TextInput
              mode="outlined"
              label={Label}
              value={props.value}
              onChangeText={props.onChangeText}
              style={{ backgroundColor: "transparent", color: theme.COLORS.WHITE}}
              outlineStyle={{ borderColor: props.error ? theme.COLORS.NEGATIVE : isFocused ? theme.COLORS.MAIN : themeModeS === 'dark' ? '#ffffff' : '#000000' }}
              cursorColor={theme.COLORS.MAIN}
              theme={{
                colors: {
                  background: theme.COLORS.NEGATIVE_ALT,
                },
              }}
              placeholder={props.placeholder || 'Digite aqui...'}
              placeholderTextColor={themeModeS === 'dark' ? '#ffffff' : '#000000'}
              textColor={themeModeS === 'dark' ? '#ffffff' : '#000000'}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              secureTextEntry={showPassword}
              // right={props.hide ? <TextInput.Icon icon={showPassword ? "eye-off" : "eye"} color={theme.COLORS.WHITE} onPress={togglePasswordVisibility} /> : null}
            />
            <Text style={{color: theme.COLORS.NEGATIVE}}>{props.error}</Text>
        </View>
        </>
        
    )
};