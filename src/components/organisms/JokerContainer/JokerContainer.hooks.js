import { useState, useCallback, useRef, useEffect } from 'react';

export const useColorPicker = () => {
  const [pickerPosition, setPosition] = useState();
  const [materialName, setMaterialName] = useState();
  const apiRef = useRef();

  const handleCanvasClick = useCallback(({ position2D, material }, api) => {
    apiRef.current = api;
    if (material) {
      setMaterialName(material.name);
      setPosition(position2D);
    }

    if (!material) {
      setPosition(undefined);
    }
  }, []);

  const handleColorClick = (color = '') => {
    if (apiRef.current) {
      apiRef.current.setColor({ material: materialName, hexColor: color });
      setMaterialName(undefined);
      setPosition(undefined);
    }
  };

  const clearPickerPosition = () => setPosition(undefined);

  return {
    pickerPosition,
    handleCanvasClick,
    materialName,
    handleColorClick,
    clearPickerPosition
  };
};

export const useOutsideClick = (ref, handleClick) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleClick(event);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
