import React, { useRef } from "react";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 500px;
  margin: 0 auto;

  .hidden {
    opacity: 0;
    transition: all 0.4s ease;
    color: #000;
  }

  .appear {
    /* opacity: 1; */
    animation: 1s rubberBand linear;
    // infinite : chay lien tuc
    transform-origin: center;
  }

  @keyframes rubberBand {
    from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes jello {
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }

    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  }
  /* 
  .jello {
    animation-name: jello;
    transform-origin: center;
  } */
`;

const AddClassClick = () => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const button: any = buttonRef.current;
    console.log(">>>>>>>", button);
    if (button) {
      button.classList.add("appear");

      button.addEventListener("animationend", () => {
        button.classList.remove("appear");
      });
    }
  };

  return (
    <Layout>
      <button onClick={(e: any) => handleClick(e)}>Click</button>
      <div ref={buttonRef} className="default">
        Chi Hieu
      </div>
    </Layout>
  );
};

export default AddClassClick;

// https://animate.style/
// https://github.com/animate-css/animate.css/tree/main/source/attention_seekers
