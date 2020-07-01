import { useState, useEffect } from 'react';

function getWindowDimensions(event) {
  return event.srcElement.body.scrollTop;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('scroll', handleResize);
    return () => window.removeEventListener('scroll', handleResize);
  }, []);

  return windowDimensions;
}
