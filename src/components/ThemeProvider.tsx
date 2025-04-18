
"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  
  // Wait until component is mounted to render theme elements
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // This prevents hydration mismatch by rendering only after mount
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
