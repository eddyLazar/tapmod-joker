import React, { useEffect, useRef, useState } from 'react';
import SketchfabWrapper from 'sketchfab-api-wrapper';

const options = {
  camera: 0,
  autostart: 1,
  autospin: 0,
  preload: 1,
  annotations_visible: 0,
  animation_autoplay: 1,
  ui_infos: 0,
  ui_annotations: 0,
  ui_controls: 1,
  ui_stop: 0,
  ui_help: 0,
  ui_hint: 0,
  ui_general_controls: 0,
  ui_watermark: 0,
  transparent: 1,
  scrollwheel: 0,
  double_click: 1
};

export default ({
  uid = '',
  onMaterialClick,
  children = () => {},
  width = '100%',
  height = 500
}) => {
  const [isLoading, setIsLoaded] = useState(true);

  const sketchFabApiRef = useRef();

  useEffect(() => {
    const init = async () => {
      const loadWrapperPromise = new SketchfabWrapper({
        iframeQuery: `#${uid}`,
        uid,
        options,
        useSingleton: false
      });
      const wrapper = await loadWrapperPromise.init();

      const api = { ...wrapper, ...wrapper.api };

      api.addEventListener('click', function(event) {
        if (onMaterialClick && event.material) {
          onMaterialClick(event.material, api);
        }
      });

      sketchFabApiRef.current = api;

      window.api = api;

      setIsLoaded(false);
    };
    init();
  }, [onMaterialClick, uid]);

  return (
    <div style={{ position: 'relative', width, height }}>
      {children(isLoading)}
      <iframe
        title={uid}
        id={uid}
        height="100%"
        width="100%"
        style={{ opacity: isLoading ? 0 : 1, border: 'none' }}
      />
    </div>
  );
};
