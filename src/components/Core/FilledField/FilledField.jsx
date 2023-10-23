import React from 'react';

import {TextInput, View} from 'react-native';
import {Text} from '../Text';
import {useStyles} from './useStyles';

import {pallete} from '@/themes';
import {responsiveWidth, normalize} from '@/helpers';

export const FilledField = ({rightIcon, ...props}) => {
  const {styles} = useStyles();

  return (
    <View style={[styles.wrapper, props.style]}>
      <View style={styles.content}>
        <View style={styles.inputWrapper}>
          <TextInput
            {...props}
            style={[styles.input, {fontSize: normalize(17)}, props.style]}
            placeholderTextColor={pallete.input.placeholder}
            selectionColor={pallete.input.selection}
          />
        </View>
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
    </View>
  );
};
