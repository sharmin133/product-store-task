// src/Components/NavbarWrapper.jsx
"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";


export default function NavbarWrapper({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  );
}
