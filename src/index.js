import React from 'react';

const getReactFCInitializer = (onMessage) => {
  const originalCreateElement = React.createElement;

  const onClick = (callback, onClick, event) => {
    if (typeof callback === 'function') {
      callback(event);
    }
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  const propsWithTrackEvents = function (type, props) {
    if (props.track.type) {
      props.onClick = onClick.bind(
        null,
        () => {
          onMessage(props.track);
        },
        props.onClick || null,
        type,
      );
    }
    return props;
  };

  React.createElement = function () {
    const args = Array.prototype.slice.call(arguments);
    let [type, props] = args;

    if (props && props.track) {
      props = propsWithTrackEvents(type, props || {});
    }

    return originalCreateElement.apply(null, args);
  };
};
export const initReactTrack = ({ onMessage }) => getReactFCInitializer(onMessage);
