import { useState, useCallback, useRef, useEffect } from 'react';

const materialsWithColorPicker = [
  'color_01',
  'color_02',
  'color_04',
  'color_06',
  'color_09',
  'color_10',
  'color_11',
  'color_12',
  'color_15',
  'color_16',
  'color_17'
];

export const useColorPicker = () => {
  const [pickerPosition, setPosition] = useState();
  const [materialName, setMaterialName] = useState();
  const [materialColor, setMaterialColor] = useState();
  const apiRef = useRef();

  const setMaterial = (materialName, materialColor) => {
    setMaterialName(materialName);
    setMaterialColor(materialColor);
  };

  const clearMaterial = () => {
    setMaterialName(undefined);
    setMaterialColor(undefined);
  };

  const handleCanvasClick = useCallback(({ position2D, material }, api) => {
    apiRef.current = api;
    if (material && materialsWithColorPicker.indexOf(material.name) !== -1) {
      setMaterial(material.name, material.channels.AlbedoPBR.color);
      setPosition(position2D);
      return;
    }

    setPosition(undefined);
    clearMaterial();
  }, []);

  const handleColorClick = (color = '') => {
    if (apiRef.current) {
      apiRef.current.setColor({ material: materialName, hexColor: color });
      clearMaterial();
      setPosition(undefined);
    }
  };

  const clearPickerPosition = () => {
    setPosition(undefined);
    clearMaterial();
  };

  return {
    materialColor,
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
