import React, { useEffect, useRef, useState } from 'react';
import SketchfabWrapper from 'sketchfab-api-wrapper';

const options = {
  camera: 0,
  autostart: 0,
  autospin: 0,
  preload: 1,
  annotations_visible: 0,
  animation_autoplay: 0,
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
  onClick,
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
      if (onClick) {
        api.addEventListener('click', function(event) {
          onClick(event, api);
        });
      }

      sketchFabApiRef.current = api;

      window.api = api;

      setIsLoaded(false);
    };
    init();
  }, [onClick, uid]);

  return (
    <div style={{ position: 'relative', width, height }}>
      {children(isLoading, sketchFabApiRef.current)}
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
