
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  
  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="relative w-9 h-9 rounded-full overflow-hidden"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className="relative w-full h-full">
              {/* Sun Icon with animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0, scale: resolvedTheme === "dark" ? 0 : 1 }}
                animate={{ 
                  rotate: resolvedTheme === "dark" ? -90 : 0,
                  scale: resolvedTheme === "dark" ? 0 : 1,
                  opacity: resolvedTheme === "dark" ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="h-4 w-4 text-yellow-500" />
              </motion.div>
              
              {/* Moon Icon with animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 90, scale: resolvedTheme === "dark" ? 1 : 0 }}
                animate={{ 
                  rotate: resolvedTheme === "dark" ? 0 : 90,
                  scale: resolvedTheme === "dark" ? 1 : 0,
                  opacity: resolvedTheme === "dark" ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="h-4 w-4 text-blue-300" />
              </motion.div>
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {resolvedTheme === "dark" ? "light" : "dark"} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
