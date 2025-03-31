import { Theme } from "@react-navigation/native";
import { useContext } from "react";
import { useColorScheme } from "react-native";
import { DesignContext } from "../contexts";

export const useDesign = (): Theme => {
  const colorScheme = useColorScheme();
  const context = useContext(DesignContext);

  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }

  return {
    dark: colorScheme === 'dark',
    colors: context[colorScheme ?? 'light'].colors,
    fonts: context.fonts,
  };
};
