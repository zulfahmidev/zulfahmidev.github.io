"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react" // Monitor = icon system
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export const AnimatedThemeToggler = ({ className }: Props) => {
  const themes = ["system", "dark", "light"] as const
  const [theme, setTheme] = useState<"system" | "dark" | "light">("system")
  const buttonRef = useRef<HTMLButtonElement>(null)

  const applyTheme = useCallback(
    (newTheme: typeof themes[number]) => {
      const root = document.documentElement
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      let effectiveDark =
        newTheme === "dark" || (newTheme === "system" && systemPrefersDark)

      root.classList.toggle("dark", effectiveDark)
      localStorage.setItem("theme", newTheme)
    },
    []
  )

  useEffect(() => {
    const saved = localStorage.getItem("theme") as typeof themes[number] | null
    const initial = saved || "system"
    setTheme(initial)
    applyTheme(initial)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") applyTheme("system")
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [applyTheme, theme])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const nextIndex = (themes.indexOf(theme) + 1) % themes.length
    const nextTheme = themes[nextIndex]

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme)
        applyTheme(nextTheme)
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [theme, applyTheme])

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Sun />
      case "light":
        return <Moon />
      case "system":
      default:
        return <Monitor />
    }
  }

  return (
    <button ref={buttonRef} onClick={toggleTheme} className={cn(className)}>
      {getIcon()}
    </button>
  )
}
