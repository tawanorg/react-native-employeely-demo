
import { Theme } from "@react-navigation/native";
import { createContext } from "react";
import { basicTheme } from "./theme";

export interface MyTheme extends Omit<Theme, 'fonts'> {
  // TODO: Add custom properties
  components: Record<string, any>;
}

export interface DesignContextType  {
  light: MyTheme;
  dark: MyTheme;
  fonts: Theme['fonts'];
};

export const DesignContext = createContext<DesignContextType>(basicTheme);
 