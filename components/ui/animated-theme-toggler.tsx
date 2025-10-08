"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

type Props = { className?: string }

export const AnimatedThemeToggler = ({ className }: Props) => {
  const themes = useMemo(
    () => [
      { name: "light", icon: <Sun /> },
      { name: "dark", icon: <Moon /> },
      { name: "system", icon: <Monitor /> },
    ],
    []
  )

  const [theme, setTheme] = useState<"system" | "dark" | "light">("system")
  const buttonRef = useRef<HTMLButtonElement>(null)

  const applyTheme = useCallback((newTheme: "light" | "dark" | "system") => {
    const root = document.documentElement
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const effectiveDark = newTheme === "dark" || (newTheme === "system" && systemPrefersDark)
    root.classList.toggle("dark", effectiveDark)
    localStorage.setItem("theme", newTheme)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    const initial = saved || "system"
    setTheme(initial)
    applyTheme(initial)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => theme === "system" && applyTheme("system")
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [applyTheme, theme])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const currentIndex = themes.findIndex(t => t.name === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    const nextTheme = themes[nextIndex].name

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme as "system" | "dark" | "light")
        applyTheme(nextTheme as "system" | "dark" | "light")
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
  }, [themes, theme, applyTheme])

  const getIcon = () => themes.find(t => t.name === theme)?.icon ?? <Monitor />

  return (
    <button ref={buttonRef} onClick={toggleTheme} className={cn(className)}>
      {getIcon()}
    </button>
  )
}
