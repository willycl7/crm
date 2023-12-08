import styled, { css } from 'styled-components';

export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  margin: 0;
  padding: 0;
`;

export const Greetings = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  span {
    animation: glow 2.5s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  @keyframes glow {
    0%, 100% {
      color: #fff;
      text-shadow: 0 0 12px #36D13C, 0 0 50px #36D13C, 0 0 100px #36D13C;
    }
    10%, 90% {
      color: #696565;
      text-shadow: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #36D13C;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: #111;
  }
  &:hover {
    background-color: #4caf50;;
    box-shadow: 0 0 10px #36D13C, 0 0 20px #36D13C, 0 0 30px #36D13C;
  }
`;

export const ResponsiveStyles = css`
  @media screen and (max-width: 574px) {
    ${Greetings} {
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    }
    ${Button} a {
      font-size: 0.5rem;
    }
  }
`;

