import { clsx, type ClassValue } from 'clsx'
import { NavigateFunction } from 'react-router'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

let navigateRef: NavigateFunction | null = null

function setNavigateRef(navigateFn: NavigateFunction): void {
  navigateRef = navigateFn
}

function getNavigateRef(): NavigateFunction | null {
  return navigateRef
}

export { cn, setNavigateRef, getNavigateRef }
