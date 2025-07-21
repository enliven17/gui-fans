import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      textSecondary: string;
      accent: string;
      border: string;
      input: string;
      button: string;
      buttonText: string;
      skillBg: string;
      activityBg: string;
    };
    fonts: {
      main: string;
      mono: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
} 