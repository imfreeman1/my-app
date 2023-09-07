import { DetailedHTMLProps } from "react";

export interface IButton {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string | number;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}
