// styleContext.tsx
import { createContext } from "react";

export const openContext = createContext<string | null>(null);

export const selectContext = createContext<string | null>(null);

export const tokenContext = createContext<string | null>(null);