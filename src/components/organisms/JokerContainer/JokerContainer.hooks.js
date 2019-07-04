import { useState, useCallback, useRef } from 'react';

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

  return { pickerPosition, handleCanvasClick, materialName, handleColorClick };
};
