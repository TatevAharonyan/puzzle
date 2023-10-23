import React, {FC} from 'react';

import {TouchableOpacity} from 'react-native';
import {useStyles} from './useStyles';

export const TabBarButton = ({children, focused, ...props}) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={[props.style, styles.wrapper]}>
      {children}
    </TouchableOpacity>
  );
};
