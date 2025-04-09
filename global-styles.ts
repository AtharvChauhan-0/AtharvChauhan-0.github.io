// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.7;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1.5rem;
  }

  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.8rem 1.5rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.accentDark};
      transform: translateY(-2px);
    }
  }

  section {
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0 1rem;
    }
  }
`;

export default GlobalStyles;
