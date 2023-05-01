import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Layout = styled.div`
  .minHeight {
    height: 100vh;
  }

  .hidden {
    opacity: 0;
    transition: all 0.4s ease;
    color: #000;
  }

  .appear {
    opacity: 1;
    transition-delay: 0.5s;
  }
`;

const ADD = () => {
  const ref = useRef<HTMLImageElement>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    console.log(">>>>>>", entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } else {
        entry.target.classList.remove("appear");
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

  return (
    <Layout>
      <div className="minHeight">Hieu</div>
      <div className="hidden" ref={ref}>
        ADD
      </div>
    </Layout>
  );
};

export default ADD;
