import React from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';
import ColorPicker from 'components/molecules/ColorPicker';
import { useColorPicker } from './JokerContainer.hooks';

const colors = [
  '#ff00ff',
  '#ffa500',
  '#00ffff',
  '#e55160',
  'maroon',
  '#00ff00'
];

export default () => {
  const {
    pickerPosition,
    handleCanvasClick,
    handleColorClick
  } = useColorPicker();

  return (
    <SketchfabModel
      uid={process.env.REACT_APP_MODEL_UID}
      height={700}
      onClick={handleCanvasClick}
    >
      {(isLoading, api) => {
        console.log(api);

        if (isLoading) {
          return <Spinner />;
        }
        if (pickerPosition) {
          const offsetX = pickerPosition[0];
          const offsetY = pickerPosition[1];
          return (
            <div style={{ position: 'absolute', left: offsetX, top: offsetY }}>
              <ColorPicker colors={colors} onChange={handleColorClick} />
            </div>
          );
        }
        return null;
      }}
    </SketchfabModel>
  );
};
