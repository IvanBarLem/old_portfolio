import styled from "styled-components";

export const Filter = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
`;

export const Container = styled.div`
  position: sticky;
  top: 50%;
  left: 50%;
  margin-left: calc(113px * 3);
  z-index: 10;
`;

export const Bar = styled.div`
  --colour1: #f1c40f;
  --colour2: #2c3e50;
  --speed: 4s;

  @keyframes slide {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 113px;
    }
  }

  min-height: 50px;
  border-radius: 10px;
  width: calc(113px * 3);
  box-shadow: 0px 10px 13px -6px rgba(44, 62, 80, 1);
  background-color: var(--colour2);
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 40px,
    var(--colour1) 40px,
    var(--colour1) 80px
  );

  animation: slide var(--speed) linear infinite;
  will-change: background-position;
`;
