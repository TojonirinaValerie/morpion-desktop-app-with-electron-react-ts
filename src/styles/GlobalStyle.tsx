import styled, { createGlobalStyle } from 'styled-components';
import { color, spacing } from './variables';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    user-select: none;
    font-family: 'Berlin sans FB', Courier, monospace;
  }
  
  html, body, #root{
      height: 100% !important;
      
  }

  body{
    background-color: ${color.background};
    
    color: ${color.text};
  }

  .modal-show {
    transform: scale(1);
  }
  .modal-hide {
    transform: scale(0);
  }

  .btn-start-game{
    margin-top: ${spacing.md}px;
  }

  .btn-label{
    font-weight: 400;
  }

`;

export const Container = `
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyle = `
  text-decoration-line: none;
  background-color: ${color.primary};
  padding: ${spacing.xxs}px ${spacing.xxl}px;
  border-radius: 20px;
  width: max-content;
  cursor: pointer;
  transition: transform 400ms cubic-bezier(0.19, 1, 0.22, 1), background-color 300ms linear;
  color: ${color.text};
`;

export const ButtonStyleHover = `
transform: scale(1.2);
background-color: ${color.accent};
`;

export default GlobalStyle;
