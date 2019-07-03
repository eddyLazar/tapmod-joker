import React, { useEffect, useRef, useState } from 'react';
import SketchfabModel from 'components/atoms/SketchfabModel';
import Spinner from 'components/molecules/Spinner';

export default () => {
  const [selectedMaterial, setSelectedMaterial] = useState();
  return (
    <SketchfabModel uid={process.env.REACT_APP_MODEL_UID}>
      {isLoading => {
        return isLoading ? <Spinner /> : null;
      }}
    </SketchfabModel>
  );
};
