import styled, { createGlobalStyle } from 'styled-components';
import { ButtonStyle, ButtonStyleHover, Container } from './GlobalStyle';
import { color, spacing } from './variables';
import { Link } from 'react-router-dom';

const HomeStyle = createGlobalStyle`
  .menu-icon {
    font-size: 1.2em;
  }
`;

export default HomeStyle;


export const HomeContainer = styled.div`
${Container}
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.div`
font-size: 3.5em;
font-weight: 600;
user-select: none;
`;

export const MenuContainer = styled.div`
padding-top: ${spacing.md}px;
width: 45%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const MenuItemContainer = styled(Link)`
    ${ButtonStyle}
    display: flex;
    justify-content: space-between;
    margin: ${spacing.sm}px;
  padding: ${spacing.xs}px ${spacing.xxl}px;

    &:hover {
      ${ButtonStyleHover}
      .button-label {
        color: ${color.secondary};
      }
    }
  `;

export const MenuLabel = styled.div`
    color: ${color.text};
    padding: 0 ${spacing.xl}px;
    font-size: 1.1em;
    transition: all 150ms linear;

    &:hover {
      /* color: ${color.secondary}; */
    }
  `;