import React, { useState } from 'react';
import DropdownButton from 'components/molecules/DropdownButton';

export default ({ size = 'default', ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <DropdownButton
      onClick={handleClick}
      size={size}
      isActive={isOpen}
      {...props}
    ></DropdownButton>
  );
};
