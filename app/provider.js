"use client";
import { ThemeProvider } from "@material-tailwind/react";
export function Provider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
