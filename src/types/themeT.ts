export type Theme = "dark" | "light " | "undefined";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
