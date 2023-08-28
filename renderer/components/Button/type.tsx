import { DetailedHTMLProps } from "react";

export interface IButton {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}
