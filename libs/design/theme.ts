import { Theme } from "@react-navigation/native";
import { DesignContextType } from "./contexts";

export const basicTheme: DesignContextType = {
  light: {
    dark: false,
    colors: {
      primary: '#4A90E2',
      background: '#F5F5F5',
      card: '#FFFFFF',
      text: '#333333',
      border: '#DDDDDD',
      notification: '#FFCC00',
    },
    components: {},
  },
  dark: {
    dark: true,
    colors: {
      primary: '#4A90E2',
      background: '#1A1A1A',
      card: '#2A2A2A',
      text: '#E0E0E0',
      border: '#444444',
      notification: '#FFCC00',
    },
    components: {},
  },
  fonts: { 
    heavy: {
      fontFamily: 'RobotoBlack',
      fontWeight: '900',
    },
    bold: {
      fontFamily: 'RobotoBold',
      fontWeight: '700',
    },
    medium: {
      fontFamily: 'RobotoMedium',
      fontWeight: '500',
    },
    regular: {
      fontFamily: 'RobotoRegular',
      fontWeight: '400',
    },
  },
};

const lightTheme: Theme = {
  dark: true,
  fonts: basicTheme.fonts,
  colors: basicTheme.dark.colors,
};

const darkTheme: Theme = {
  dark: true,
  fonts: basicTheme.fonts,
  colors: basicTheme.dark.colors,
};

export function makeTheme(mode: 'dark' | 'light') {
  const baseTheme = mode === 'dark' ? darkTheme : lightTheme;
  return {
    ...baseTheme,
    fonts: basicTheme.fonts,
  };
}
