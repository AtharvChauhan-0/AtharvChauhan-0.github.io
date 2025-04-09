// src/styles/Theme.ts
export const theme = {
  colors: {
    primary: '#0F172A',
    secondary: '#1E293B',
    accent: '#38BDF8',
    accentDark: '#0284C7',
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    success: '#4ADE80',
    warning: '#FACC15',
    danger: '#F87171',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    large: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: '8px',
  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
};

export type ThemeType = typeof theme;
