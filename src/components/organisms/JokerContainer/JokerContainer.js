import React, { useRef, useCallback } from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';
import ColorPicker from 'components/molecules/ColorPicker';
import JokerText from 'components/molecules/JokerText';
import { useMaterialClick, useOutsideClick } from './JokerContainer.hooks';
import theme from 'theme';
import GameCategoryList from 'components/organisms/GameCategoryList';
import data from 'data.json';
import { Box } from 'rebass';

export default () => {
  const {
    clickPosition,
    handleMaterialClick,
    clearMaterialClick,
    materialName,
    materialColors
  } = useMaterialClick();

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, clearMaterialClick);

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
