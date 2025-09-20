
import { ReactNode } from "react";
// interfaces/index.ts
export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}


export interface LayoutProps {
  children: ReactNode;
}

export interface PillProps {
  title: string;
}
