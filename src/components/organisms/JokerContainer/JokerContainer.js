import React, { useRef, useCallback, useState } from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';
import ColorPicker from 'components/molecules/ColorPicker';
import JokerText from 'components/molecules/JokerText';
import { useMaterialClick, useOutsideClick } from './JokerContainer.hooks';
import theme from 'theme';
import GameCategoryList from 'components/organisms/GameCategoryList';
import data from 'data.json';
import { Box } from 'rebass';

const faceMaterials = [
  'joker_rigged1_animTest:color_10',
  'joker_rigged1_animTest:color_12',
  'joker_rigged1_animTest:color_16',
  'joker_rigged1_animTest:color_17'
];

const animationTypes = {
  init: 'INIT',
  idle: 'IDLE',
  body: 'BODY',
  face: 'FACE'
};

const runAnimations = (type, animations, api) => {
  if (animations.length) {
    switch (type) {
      case animationTypes.init:
        api.setCurrentAnimationByUID(animations[0][0]);
        break;
      case animationTypes.idle:
        api.setCurrentAnimationByUID(animations[1][0]);
        break;
      case animationTypes.face:
        api.setCurrentAnimationByUID(animations[2][0]);
        break;
      case animationTypes.body:
        api.setCurrentAnimationByUID(animations[3][0]);
        break;
      default:
        break;
    }
  }
};

export default () => {
  const {
    clickPosition,
    handleMaterialClick,
    clearMaterialClick,
    materialName,
    materialColors
  } = useMaterialClick();

  const wrapperRef = useRef(null);

  const [animations, setAnimations] = useState([]);

  const onLoad = useCallback(api => {
    api.getAnimations(function(err, animations) {
      setAnimations(animations);

      runAnimations(animationTypes.init, animations, api);

      api.addEventListener('animationEnded', function() {
        runAnimations(animationTypes.idle, animations, api);
      });
    });
  }, []);

  useOutsideClick(wrapperRef, clearMaterialClick);

  return (
    <div ref={wrapperRef}>
      <SketchfabModel
        uid={process.env.REACT_APP_MODEL_UID}
        height={theme.jokerHeight}
        onClick={handleMaterialClick}
        onLoad={onLoad}
      >
        {(isLoading, api) => {
          let colorPicker = null;

          if (!isLoading && materialColors && clickPosition) {
            const handleColorClick = color => {
              api.setColor({
                material: materialName,
                hexColor: color
              });

              clearMaterialClick();

              if (animations.length) {
                if (faceMaterials.indexOf(materialName) !== -1) {
                  animations.length &&
                    runAnimations(animationTypes.face, animations, api);
                } else {
                  animations.length &&
                    runAnimations(animationTypes.body, animations, api);
                }
              }
            };

            colorPicker = (
              <ColorPicker
                x={clickPosition[0]}
                y={clickPosition[1]}
                colors={materialColors}
                onChange={handleColorClick}
              />
            );
          }

          return (
            <React.Fragment>
              {colorPicker}
              {isLoading && <Spinner />}
              <JokerText onClick={clearMaterialClick} />
              <Box
                onClick={clearMaterialClick}
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
