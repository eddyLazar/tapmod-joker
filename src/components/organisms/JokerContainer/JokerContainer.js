import React, { useRef, useCallback } from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';
import ColorPicker from 'components/molecules/ColorPicker';
import JokerText from 'components/molecules/JokerText';
import { useColorPicker, useOutsideClick } from './JokerContainer.hooks';
import theme from 'theme';
import GameCategoryList from 'components/organisms/GameCategoryList';
import data from 'data.json';
import { Box } from 'rebass';

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

export default () => {
  const {
    pickerPosition,
    handleCanvasClick,
    handleColorClick,
    clearPickerPosition,

    materialName
  } = useColorPicker();

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, clearPickerPosition);

  const onLoad = useCallback(api => {
    api.getAnimations(function(err, animations) {
      api.play();
      api.setCurrentAnimationByUID(animations[0][0]);
      api.addEventListener('animationEnded', function() {
        api.setCurrentAnimationByUID(animations[1][0]);
      });
    });
  }, []);

  return (
    <div ref={wrapperRef}>
      <SketchfabModel
        uid={process.env.REACT_APP_MODEL_UID}
        height={theme.jokerHeight}
        onClick={handleCanvasClick}
        onLoad={onLoad}
      >
        {(isLoading, api) => {
          let colorPicker = null;

          if (!isLoading) {
            if (pickerPosition && materialName) {
              const colors = materialColorPalette[materialName];

              if (colors) {
                const offsetX = pickerPosition[0];
                const offsetY = pickerPosition[1];
                colorPicker = (
                  <div
                    style={{
                      position: 'absolute',
                      left: offsetX,
                      top: offsetY
                    }}
                  >
                    <ColorPicker colors={colors} onChange={handleColorClick} />
                  </div>
                );
              }
            }
          }

          return (
            <React.Fragment>
              {colorPicker}
              {isLoading && <Spinner />}
              <JokerText />
              <Box
                width="100%"
                px={[1, 0]}
                py={2}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  zIndex: 1
                }}
              >
                <GameCategoryList categoryList={data.categoryList} />
              </Box>
            </React.Fragment>
          );
        }}
      </SketchfabModel>
    </div>
  );
};
