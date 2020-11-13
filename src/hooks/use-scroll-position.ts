import { useLayoutEffect, useRef } from 'react';

const isBrowser = typeof window !== 'undefined';

type ScrollPositionInput = {
  element?: React.MutableRefObject<Element>;
  useWindow: boolean;
};

type ScrollPosition = {
  x: number;
  y: number;
};

type ScrollPositionHandlerInput = {
  currentPosition: ScrollPosition;
  previousPosition: ScrollPosition;
};

type ScrollPositionHandler = (position: ScrollPositionHandlerInput) => void;

function getScrollPosition({
  element,
  useWindow,
}: ScrollPositionInput): ScrollPosition {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element?.current ?? document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: ScrollPositionHandler,
  waitMilliseconds = 0,
  useWindow = true,
  element?: React.MutableRefObject<Element>,
  deps: React.DependencyList | undefined = []
): void {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout: ReturnType<typeof setTimeout> | null;

  const callback = () => {
    const currentPosition = getScrollPosition({ element, useWindow });
    effect({ previousPosition: position.current, currentPosition });
    position.current = currentPosition;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (waitMilliseconds) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callback, waitMilliseconds);
        }
      } else {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
}
