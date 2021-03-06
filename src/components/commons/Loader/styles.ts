import styled, { css } from 'styled-components';

export const LoaderWrapper = {
  Content: styled.div``,
  Loader: styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.transition};
    z-index: 100;

    ${({ isRunning }) => {
      if (isRunning) {
        return css`
          display: flex; 
        `;
      }
      return css`
        display: none;
      `;
    }}

    span.loader__ball {
      display: inline-block;
      margin: auto 0.25rem;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 0.375rem;
      background: #06c;

    &.loader__ball--1,
    &.loader__ball--2,
    &.loader__ball--3 {
      animation: bulging 2s infinite ease-in-out;
    }

    &.loader__ball--1 {
      animation-delay: -0.4s;
    }

    &.loader__ball--2 {
      animation-delay: -0.2s;
    }

    @keyframes bulging {
      0%,
      80%,
      100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  `
}
