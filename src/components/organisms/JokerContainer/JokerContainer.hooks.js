import { useState, useCallback, useEffect } from 'react';

const materialColorPalette = {
  'joker_rigged1_animTest:color_01': [
    '#171616',
    '#7C0303',
    '#0A254F',
    '#470429',
    '#09331B',
    '#D4EE7B'
  ],
  'joker_rigged1_animTest:color_02': [
    '#FF0000',
    '#2F77A7',
    '#1C1ED4',
    '#629900',
    '#C15401',
    '#290D39'
  ],
  'joker_rigged1_animTest:color_04': [
    '#E4D501',
    '#A4071F',
    '#0DE500',
    '#007CDA',
    '#DA5E00',
    '#292B44'
  ],
  'joker_rigged1_animTest:color_06': [
    '#00D100',
    '#27419B',
    '#B74413',
    '#1C2A2B',
    '#BA072C',
    '#0C1A30'
  ],
  'joker_rigged1_animTest:color_09': [
    '#212121',
    '#2B1212',
    '#38322F',
    '#46463D',
    '#585858',
    '#31D42C'
  ],
  'joker_rigged1_animTest:color_10': [
    '#27D60E',
    '#F2070C',
    '#DFB801',
    '#6F6F73',
    '#295812',
    '#190602'
  ],
  'joker_rigged1_animTest:color_11': [
    '#DCC600',
    '#30BCEA',
    '#E44714',
    '#352A2F',
    '#0BC947',
    '#FFFFFF'
  ],
  'joker_rigged1_animTest:color_12': [
    '#525252',
    '#FE1C1C',
    '#3BFE1C',
    '#040E03',
    '#FAFF8F',
    '#A9198F'
  ],
  'joker_rigged1_animTest:color_15': [
    '#FF8900',
    '#35C008',
    '#341D21',
    '#6EFBC7',
    '#BA0338',
    '#3F4D59'
  ],
  'joker_rigged1_animTest:color_16': [
    '#828282',
    '#727171',
    '#A65D18',
    '#459756',
    '#FA13E2',
    '#F3C2D7'
  ],
  'joker_rigged1_animTest:color_17': [
    '#BCBCBC',
    '#5C5656',
    '#D22B40',
    '#60E960',
    '#70E4FF',
    '#FFA670'
  ]
};

export const useMaterialClick = () => {
  const [clickPosition, setClickPosition] = useState();
  const [materialName, setMaterialName] = useState();

  const clearMaterial = () => {
    setMaterialName(undefined);
  };

  const handleMaterialClick = useCallback(({ position2D, material }) => {
    if (material) {
      setMaterialName(material.name);
      setClickPosition(position2D);
      return;
    }

    setClickPosition(undefined);
    clearMaterial();
  }, []);

  const clearMaterialClick = () => {
    setClickPosition(undefined);
    clearMaterial();
  };

  return {
    clickPosition,
    handleMaterialClick,
    materialName,
    clearMaterialClick,
    materialColors: materialColorPalette[materialName]
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
