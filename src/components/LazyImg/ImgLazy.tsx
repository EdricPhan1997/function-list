import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
const ImgLazy = (props: any) => {
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0.5);
  const ref = useRef<HTMLImageElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref?.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  const handleImageLoaded = useCallback(() => {
    setIsLoading(false);
    setOpacity(1);
  }, []);

  const _style = {
    opacity: opacity,
    transition: "opacity 0.3s ease-in-out",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={_style}>
      {inView ? (
        <div style={{ width: "100%", height: "100%" }}>
          {isLoading && <Skeleton />}
          <img {...props} ref={ref} onLoad={handleImageLoaded} />
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%" }}>
          <Skeleton id={props.id} ref={ref} />
        </div>
      )}
    </div>
  );
};

export default ImgLazy;

const Skeleton = styled.div`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  height: 200px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: block;
  width: 100%;
  height: 100%;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;
