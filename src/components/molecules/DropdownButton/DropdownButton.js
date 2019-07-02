import React from 'react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';

const propsBySize = {
  default: {
    icon: 'more-vert',
    fontSize: '13px',
    lineHeight: '23px',
    width: 23
  },
  large: {
    icon: 'more',
    fontSize: '3px',
    lineHeight: '32px',
    width: 42
  }
};

export default ({ size = 'default', isActive = false, ...props }) => {
  const { icon, fontSize, lineHeight, width } = propsBySize[size];
  return (
    <Button
      {...props}
      px={0}
      py={0}
      bg={isActive ? 'transparent' : 'dropdown'}
      width={width}
    >
      <Icon
        fontSize={fontSize}
        type={icon}
        lineHeight={`${lineHeight}!important`}
      ></Icon>
    </Button>
  );
};
