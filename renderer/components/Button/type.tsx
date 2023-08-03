export interface IButton {
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
}
