export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  title: string;
  buttonLabel?: string;
  buttonBackgroundColor?: string;
  styles: string;
  action: () => void;
}
