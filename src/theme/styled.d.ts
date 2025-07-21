import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      textSecondary: string;
      accent: string;
      accent2: string;
      accent3: string;
      border: string;
      input: string;
      button: string;
      buttonText: string;
      skillBg: string;
      activityBg: string;
      memePink: string;
      memeBlue: string;
      memeGreen: string;
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