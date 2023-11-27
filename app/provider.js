"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { UserProvider } from "./contexts/UserProvider.jsx";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
export function Provider({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <Navbar />
        {children}
        <Footer />
      </UserProvider>
    </ThemeProvider>
  );
}
