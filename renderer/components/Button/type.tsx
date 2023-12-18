export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string | number;
  disabled?: boolean;
}
