import React, { useRef } from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';
import ColorPicker from 'components/molecules/ColorPicker';
import JokerText from 'components/molecules/JokerText';
import { useColorPicker, useOutsideClick } from './JokerContainer.hooks';
import theme from 'theme';

export default () => {
  const {
    pickerPosition,
    handleCanvasClick,
    handleColorClick,
    clearPickerPosition,
    materialColor
  } = useColorPicker();

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, clearPickerPosition);

  console.log(materialColor);

  return (
    <div ref={wrapperRef}>
      <SketchfabModel
        uid={process.env.REACT_APP_MODEL_UID}
        height={theme.jokerHeight}
        onClick={handleCanvasClick}
      >
        {(isLoading, api) => {
          let colorPicker = null;
          if (pickerPosition && materialColor) {
            const offsetX = pickerPosition[0];
            const offsetY = pickerPosition[1];
            colorPicker = (
              <div
                style={{ position: 'absolute', left: offsetX, top: offsetY }}
              >
                <ColorPicker
                  albedoColor={materialColor}
                  onChange={handleColorClick}
                />
              </div>
            );
          }
          return (
            <React.Fragment>
              {colorPicker}
              {isLoading && <Spinner />}
              <JokerText
                style={{
                  position: 'absolute',
                  top: theme.jokerHeight / 2,
                  zIndex: 1
                }}
              />
            </React.Fragment>
          );
        }}
      </SketchfabModel>
    </div>
  );
};
