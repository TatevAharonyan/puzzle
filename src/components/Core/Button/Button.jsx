import {Fonts, TButton} from '@/themes';
import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from './useStyles';
import {responsiveWidth} from '@/helpers';
import {Text} from '@/components';

export const Button = ({
  color = 'pink',
  margin,
  children,
  leftIcon,
  onPress,

  ...props
}) => {
  const {styles} = useStyles({
    color,
  });
  const margins = useMemo(
    () => ({
      marginTop: responsiveWidth(margin?.top || 0),
      marginLeft: responsiveWidth(margin?.left || 0),
      marginRight: responsiveWidth(margin?.right || 0),
      marginBottom: responsiveWidth(margin?.bottom || 0),
    }),
    [margin],
  );

  return (
    <TouchableOpacity
      {...props}
      style={[styles.wrapper, margins, props.style]}
      activeOpacity={0.6}
      onPress={onPress}>
      {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
      <Text color="white" weight={600}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
