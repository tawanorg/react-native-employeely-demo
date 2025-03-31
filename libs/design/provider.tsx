import { ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { DesignContext } from './contexts';
import { basicTheme, makeTheme } from './theme';

export const DesignProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = makeTheme(colorScheme as 'dark' | 'light');

  return (
    <ThemeProvider value={theme}>
      <DesignContext.Provider value={basicTheme}>{children}</DesignContext.Provider>
    </ThemeProvider>
  );
};
