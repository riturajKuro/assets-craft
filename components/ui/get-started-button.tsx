"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface GetStartedButtonProps {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  type?: "button" | "submit" | "reset"
}

export function GetStartedButton({ children = "Get Started", onClick, className, size = "lg", type }: GetStartedButtonProps) {
  return (
    <Button className={`group relative overflow-hidden ${className}`} size={size} onClick={onClick} type={type}>
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">{children}</span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black-500">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  )
}
